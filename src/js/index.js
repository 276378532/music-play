var $ = window.Zepto;
var root = window.player;


var index = 0;
var songList;
var audio = new root.audioControl();
var controlManger;
function bindEvent() {
    $scope.on("play:change", function(e,index){
        audio.getAudio(songList[index].audio);
        // if(audio.status == "play"){
        //     audio.play();
        // }
    })
    $scope.on("click", ".prev-btn", function(){
        //获得当前坐标
        index = controlManger.prev()
        //渲染
        root.renderInfo(songList[index], ".song-info")
        root.renderImg(songList[index], ".img-wrapper img")
        root.renderIsLike(songList[index], ".control .like-btn")
        root.renderAllTime(songList[index].duration)
        //上一首
        // root.start();
        audio.getAudio(songList[index].audio)
        if(audio.status === "pause"){
            root.stop();
            root.clear();
            root.updata(0);
        }else{
            root.stop();            
            root.clear();
            root.start()
            audio.play()                
        }      
    })
    $scope.on("click", ".next-btn", function(){
        index = controlManger.next()
        //渲染
        root.renderInfo(songList[index], ".song-info")
        root.renderImg(songList[index], ".img-wrapper img")
        root.renderIsLike(songList[index], ".control .like-btn")
        root.renderAllTime(songList[index].duration)
        //下一首
        // root.start();             
        audio.getAudio(songList[index].audio)
        if(audio.status === "pause"){
            root.stop();
            root.clear();
            root.updata(0);
        }else{
            root.stop();            
            root.clear();
            root.start()
            audio.play()
        }   
    })

    $scope.on("click", ".play-btn", function(){
        if(audio.status == "play"){
            audio.pause();
            root.stop()
        }else{
            audio.play();
            root.start();
        }
        $(this).toggleClass("pause");
    })    
}

function bindTouch(){
    var $slider = $scope.find('.slider-pointer');
    var offset = $scope.find(".pro-wrapper").offset();
    var left = offset.left;
    var width = offset.width;
    // console.log(left + "-"+ width);
    $slider.on("touchstart", function(){
        root.stop(); 
    }).on('touchmove',function(e){
        var x = e.changedTouches[0].clientX;
        var per = (x -left) / width;
        if(per < 0 || per > 1){
            per = 0
        }
        root.updata(per)
    }).on("touchend",function(e){
        var x = e.changedTouches[0].clientX;
        var per = (x -left) / width;
        if(per < 0 || per > 1){
            per = 0
        }
        var curDuration = songList[controlManger.index].duration;
        var curTime = per * curDuration;
        audio.playTo(curTime);
        root.start(per)
    })
}

function getDate(url){
    $.ajax({
        type: "GET",
        url: url,
        success: function(data){
            songList = data;
            controlManger = new root.controlManger(songList.length);
            //初始化渲染页面
            root.renderInfo(songList[0], ".song-info")
            root.renderImg(songList[0], ".img-wrapper img")
            root.renderIsLike(songList[0], ".control .like-btn")
            root.renderAllTime(songList[0].duration)
            //绑定以及触发自定义事件
            bindEvent();
            $scope.trigger("play:change",0)
            bindTouch();
        },
        error: function(){  
            console.log("error")
        }
    })
}

getDate("../mock/data.json")