(function($, root){
    var $scope = $(document.body);
    var duration;  //歌曲总时长
    var frameId;
    var lastPer = 0;
    var startTime;

    //把 秒 => 分钟
    function formatTime(time){
        time = Math.round(time)
        var min = Math.floor(time / 60);
        var second = time - min *60;
        if(second < 10){
            second = '0' + second;
        }
        return min + ':' + second;
    }
    //渲染总时间
    function renderAllTime(time){
        duration = time;
        var time = formatTime(time);
        $scope.find(".all-time").html(time);
    }
    //更新音乐播放时间
    function updata(percent){
        var curTime = percent * duration;
        curTime = formatTime(curTime);
        //渲染时间
        $scope.find(".cur-time").html(curTime);
        //渲染进度条
        var percentage = (percent - 1) * 100 + "%"; 
        $scope.find(".pro-top").css({
            "transform": "translateX("+ percentage +")"
        })
    }
    //开启动画
    function start(per){
        var per = per || 0;
        // lastPer = 0;
        startTime = new Date().getTime();
        //动画
        function frame(){
            var curTime = new Date().getTime();
            var percent
            if(per){
                percent =  per + (curTime - startTime) / (duration * 1000)
                lastPer = per 
            }else{
                percent =  lastPer + (curTime - startTime) / (duration * 1000)
            }
          
            if(percent < 1){
                frameId = requestAnimationFrame(frame);  
            }

            if(percent > 1){
                $scope.find(".next-btn").trigger('click')
            }
                
            updata(percent);
        }
        frame();
    }
    function stop(){
        var stopTime = new Date().getTime();
        lastPer = lastPer + (stopTime - startTime) / (duration * 1000);
        cancelAnimationFrame(frameId)
    }
    function clear(){
        lastPer = 0;
    }
    root.renderAllTime = renderAllTime;
    root.start = start;
    root.stop = stop;
    root.updata = updata;
    root.clear = clear;
})(window.Zepto, window.player || (window.player = {}))