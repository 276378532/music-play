//实现渲染
var $scope = $(document.body);
(function($, root){
    
    function renderInfo(info,dom){
        var html = '<div class="song-name">'+ info.song +'</div>'+
        '<div class="singer-name">'+ info.singer+'</div>' +
        '<div class="album-name">'+ info.album +'</div>';
        $scope.find(dom).html(html);
    }
    function renderImg(info, dom){
        var img = new Image();
        img.src = info.image;
        img.onload = function(){
            root.blurImg(img, $scope);
            $scope.find(dom).attr("src",info.image);
        }
    }
    function renderIsLike(info,dom){
        if(info.isLike){
            $scope.find(dom).addClass("liking")
        }else{
            $scope.find(dom).removeClass('liking')
        }
    }
    root.renderImg = renderImg;
    root.renderInfo = renderInfo;
    root.renderIsLike = renderIsLike;
})(window.Zepto, window.player || (window.player={}))

//通过window.player暴露函数
