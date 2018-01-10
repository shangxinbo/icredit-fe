
$(document).ready(function(e) {

    $.ajax({
        type: "get",
        async: false,
        url: "//biz.jd.com/login/checkLoginedUser.do",
        dataType: "jsonp",
        jsonp:"callback",
        jsonpCallback:"loginCheck",
        success: function(data){
        },
        error: function(){
            $('.had-login').hide();
            $('.not-login').show();
        }
    });

    $("#login-credit").attr("href",contextPath + "/login?returnUrl=" + encodeURIComponent(window.location.href));

});

function loginCheck(data) {
    if(data.code == 00000){
        $('.had-login').show();
        $('.not-login').hide();
    }else {
        $('.had-login').hide();
        $('.not-login').show();
    }
}



