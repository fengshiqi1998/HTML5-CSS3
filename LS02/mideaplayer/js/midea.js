$(function () {
    //播放器样式
    playwidth = $(window).width();
    outerwidth = playwidth * 0.9;
    $("#outer").css('width', outerwidth);
    $("#rate").css('width', outerwidth * 0.6);
    $("#ratetime").css('width', outerwidth * 0.1);
    $("#volume").css('width', outerwidth * 0.1);
    //获取audio元素
    var audio = document.getElementById('audios');
    $('#content a').click(
        function () {
            //获得要播放歌去的地址
            hrefs = $(this).attr('href');
            inner = $(this).html();
            //innert=this.innerHTML
            //判断动作
            if (inner == '播放') {
                $('#content a').html('播放');
                $(this).html('停止');
                //判断是否切换歌曲
                if (audio.src.indexOf(hrefs) == -1) {
                    audio.src = hrefs;
                }
                audio.play();
                $('#playp').css('background-position', '-70px -25px');
                var timer = setInterval(function () {
                    //获取歌曲当前的播放时间
                    currenttime = audio.currentTime;
                    alltime = audio.duration;
                    if (currenttime == alltime) {
                        clearInterval(timer);
                    } else {
                        $('#ratetime').html((currenttime / 60).toFixed(2) + '/' + (alltime / 60)
                            .toFixed(2));
                        rates = (currenttime / 60).toFixed(4) / (alltime / 60).toFixed(4);
                        $('#ratemidtop').css('width', parseInt(outerwidth * 0.5 * rates));
                    }
                }, 1000);
            }
            if (inner == '停止') {
                $('#content a').html('播放');
                audio.pause();
                $('#playp').css('background-position', '-50px -25px');
            }
            return false;
        }
    );
    $("#content").css('height', $(window).height() * 0.75);

})