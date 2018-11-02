($(function () {
    $("#dropdown3-wrap").on("click",function (e) {
        e.stopPropagation();
        //取消Bootstrap的dropdown-menu点击默认关闭事件
    })
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        /*window.location.href="你的手机版地址";*/
        $('.dropdown3').hide();
        $('#dropdown3-wrap').on('click',function(){
            console.log($('#dropdown3-wrap').attr('flag'));
            if($('#dropdown3-wrap').attr('flag')=='off'){
                $('.dropdown3').show();
                $('#dropdown3-wrap').attr('flag','on');
            }else{
                $('.dropdown3').hide(500);
                $('#dropdown3-wrap').attr('flag','off');
            }
        })
    } else {
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

        /*window.location.href="你的电脑版地址";    */
       
        // $("#dropdown3-wrap").die().live("click",function(){
        //     console.log(1);
        // });

}))