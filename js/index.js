($(function () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        /*window.location.href="你的手机版地址";*/
        $('.dropdown3').hide();
        $('#dropdown3-wrap').on('tap',function(){
            $('.dropdown3').show();
        })
    } else {
        /*window.location.href="你的电脑版地址";    */
        $('.dropdown3').hide();
        $('#dropdown3-wrap').mouseover(function () {
            $('.dropdown3').show();
        })
        $('.dropdown3').hover(function () {
            $('.dropdown3').show();
        }, function () {
            $('.dropdown3').hide(500);
        })
    }
}))