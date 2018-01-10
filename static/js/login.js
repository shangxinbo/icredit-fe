
$(document).ready(function(e) {

    function email(){
        var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var email=$("#email").val();
        if(email==''){
            return false;
        }else if(!pattern.test(email)){
           return false;
        }
        return true;
    }


    function passWord(){
        var passWord=$("#passWord").val();
        if (passWord == ''){
            return false
        }
        return true;
    }

    function verifyCode(){
        var verifyCode=$("#verifyCode").val();
        if (verifyCode == ''){
            return false
        }
        return true;
    }


    $("#login").click(function(e){
        if (!email() || !passWord()){
            $("#verifyCodeError").hide();
            $("#passwordError").show();
            return;
        }

        if (!verifyCode()){
            $("#passwordError").hide();
            $("#verifyCodeError").show();
            return;
        }

        $.post(contextPath +"/api/login/doLogin",{
            email:$("#email").val(),
            passWord:$("#passWord").val(),
            verifyCode:$("#verifyCode").val()
        },function(data,status){
            if(data.code == 200){
                if (data.data.result == true){
                    var referUrl = UrlSearch();
                    if (typeof(referUrl)!="undefined" && referUrl != ''){
                        window.location.href=referUrl;
                    }else {
                        window.location.href=contextPath +'/user/console/index';
                    }

                }else {
                    $("#passwordError").hide();
                    $("#verifyCodeError").hide();

                    var errorMsg = "<p>" + data.msg + "</p>"
                    $("#serverError").html(errorMsg);

                    $("#serverError").show();

                    $("#img").trigger("click");
                }
            }else {
                $("#passwordError").hide();
                $("#verifyCodeError").hide();

                var errorMsg = "<p>" + data.msg + "</p>"
                $("#serverError").html(errorMsg);

                $("#serverError").show();

                $("#img").trigger("click");
            }
        }).error(function(data){
            $("#passwordError").hide();
            $("#verifyCodeError").hide();

            var errorMsg = "<p>" + data.msg + "</p>"
            $("#serverError").html(errorMsg);

            $("#serverError").show();

            $("#img").trigger("click");
        })
    });

    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#login").trigger("click");
        }
    });

    $('#clearInput').click(function(e){
        $("#resetEmail").val("");
        $("#resetNum").val("");
    });

    function UrlSearch()
    {
        var name,value;
        var str=location.href; //取得整个地址栏
        var num=str.indexOf("?")
        str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

        var arr=str.split("&"); //各个参数放到数组里
        for(var i=0;i < arr.length;i++){
            num=arr[i].indexOf("=");
            if(num>0){
                name=arr[i].substring(0,num);
                value=arr[i].substr(num+1);
                if (name = "referUrl"){
                    return value;
                }
            }
        }
    }



});
