
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
        }
    });

});

function loginCheck(data) {
    if(data.code == 00000){
        $('#login-area1').hide();
        $('#login-area2').show();
    }
}