
$(document).ready(function(e) {

    $("#email").blur(function(e){
        var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var email=$("#email").val();
        if(email==''){
            $("#email").parent().parent('div').addClass('verify-erro');
        }else if(!pattern.test(email)){
            $("#email").parent().parent('div').addClass('verify-erro');
        }else{
            $.get(contextPath+"/api/register/checkEmailExsit?email=" + $("#email").val(),function(data,status){
                if(data.code == 200){
                    if (data.data.checkEmailExsit == true){
                        $("#email").parent().parent('div').addClass('verify-erro');
                    }else {
                        $("#email").parent().parent('div').removeClass('verify-erro');
                    }
                }else {
                    $("#email").parent().parent('div').addClass('verify-erro');
                }
            }).error(function(data){
                $("#email").parent().parent('div').addClass('verify-erro');
            })

        }
    });

    $("#registerNum").blur(function(e){
        var registerNum=$("#registerNum").val();
        if (registerNum==''){
            $("#registerNum").parent().parent('div').addClass('verify-erro');
            return;
        }

        $.get(contextPath+"/api/register/checkRegisterNum?email=" + $("#email").val() + "&registerNum="+registerNum ,function(data,status){
            if(data.code == 200){
                if (data.data.result == 'true'){
                    $("#registerNum").parent().parent('div').removeClass('verify-erro');
                }else {
                    $("#registerNum").parent().parent('div').addClass('verify-erro');
                }
            }else {
                $("#registerNum").parent().parent('div').addClass('verify-erro');
            }
        }).error(function(data){
            $("#registerNum").parent().parent('div').addClass('verify-erro');
        })
    });

    $("#phone").blur(function(e){
        var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
        var isPhone = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;;
        var phone=$("#phone").val();
        //如果为1开头则验证手机号码
        if (phone.substring(0, 1) == 1) {
            if (!isMobile.exec(phone) && phone.length != 11) {
                $("#phone").parent().parent('div').addClass('verify-erro');
            }else {
                $("#phone").parent().parent('div').removeClass('verify-erro');
                return;
            }

        }
        //如果为0开头则验证固定电话号码
        else if (phone.substring(0, 1) == 0) {
            if (!isPhone.test(phone)) {
                $("#phone").parent().parent('div').addClass('verify-erro');
            }else {
                $("#phone").parent().parent('div').removeClass('verify-erro');
                return;
            }
        }
        //否则全部不通过
        else {
            $("#phone").parent().parent('div').addClass('verify-erro');
        }

    });

    $("#passWord").blur(function(e){
        var passWord=$("#passWord").val();

        var num = 0;
        var number = 0 ;
        var letter = 0 ;
        var bigLetter = 0 ;
        var chars = 0 ;

        if (passWord.search(/[0-9]/) != -1) {
            num += 1;
            number =1;
        }
        if (passWord.search(/[A-Z]/) != -1) {
            num += 1;
            bigLetter = 1 ;
        }
        if (passWord.search(/[a-z]/) != -1) {
            num += 1;
            letter = 1 ;
        }
        if (passWord.search(/[^A-Za-z0-9]/) != -1) {
            num += 1;
            chars = 1 ;
        }
        if (num >= 2 && (passWord.length >= 6 && passWord.length <= 16)) {
            $("#passWord").parent().parent('div').removeClass('verify-erro');
        }else if(passWord.length < 6 || passWord.length > 20){
            $("#passWord").parent().parent('div').addClass('verify-erro');
        }else if(num == 1){
            $("#passWord").parent().parent('div').addClass('verify-erro');
        }
    });

    $("#passWordConfirm").blur(function(e){
        var passWordConfirm=$("#passWordConfirm").val();
        if(passWordConfirm==''){
            $("#passWordConfirm").parent().parent('div').addClass('verify-erro');
        }else if(passWordConfirm!=$("#passWord").val()){
            $("#passWordConfirm").parent().parent('div').addClass('verify-erro');
        }else{
            $("#passWordConfirm").parent().parent('div').removeClass('verify-erro');
        }
    });


    // $("#sendRegisterEmail").click(function(e){
    //     $("#email").blur();
    //
    //     if ($("#email").parent().parent('div').hasClass('verify-erro')){
    //         return;
    //     }
    //
    //     $.get(contextPath+"/api/register/sendRegisterEmail?email=" + $("#email").val(),function(data,status){
    //         if(data.code == 200){
    //             if (data.data.checkEmailExsit == true){
    //                 $("#email").parent().parent('div').addClass('verify-erro');
    //             }else {
    //                 $("#email").parent().parent('div').removeClass('verify-erro');
    //             }
    //         }
    //     })
    // });

    $("#register-now").click(function(e){

        if($("#register-now").hasClass('disabled-btn')){
            return;
        }

        $("#email").blur();
        $("#phone").blur();
        $("#passWord").blur();
        $("#passWordConfirm").blur();
        $("#registerNum").blur();


        if ($("#email").parent().parent('div').hasClass('verify-erro')){
            return;
        }

        if ($("#phone").parent().parent('div').hasClass('verify-erro')){
            return;
        }

        if ($("#passWord").parent().parent('div').hasClass('verify-erro')){
            return;
        }

        if ($("#registerNum").parent().parent('div').hasClass('verify-erro')){
            return;
        }

        if ($("#passWordConfirm").parent().parent('div').hasClass('verify-erro')){
            return;
        }

        $.post(contextPath+"/api/register/doRegister",{
            email:$("#email").val(),
            phone:$("#phone").val(),
            passWord:$("#passWord").val(),
            registerNum:$("#registerNum").val()
        },function(data,status){

            if(data.code == 200){
                if (data.data.result == "success"){
                    window.location.href=contextPath+"/page/register";
                }else {
                    tipsController("注册失败","请检查信息是否填写正确","javascript:;","确定","");
                }
            }else {
                tipsController("注册失败","请检查信息是否填写正确","javascript:;","确定","");
            }

        }).error(function(data){
            tipsController("注册失败","请检查信息是否填写正确","javascript:;","确定","");
        })
    });


    $("#agree").click(function(e){
        $("#agree").toggleClass("checked");
        if(!$("#agree").hasClass("checked")){
            $("#register-now").addClass('disabled-btn');
        }else {
            $("#register-now").removeClass('disabled-btn');
        }
    });

    var inp = $(".register-input");
    inp.focus(function(){
        var itemBox = $(this).parent().parent(".register-infor-box");
        if(!itemBox.hasClass("verify-erro")){
            itemBox.addClass("focus");
        }
        $(this).parent().parent(".register-infor-box").addClass("input-focus");
    }).blur(function(){
        $(".register-infor-box").removeClass("input-focus");
        var itemBox = $(this).parent().parent(".register-infor-box");
        itemBox.removeClass("focus");
    });

    $('.agreement-item').click(function(){
        showLayer();
    });

    $('.agreement-item-register').click(function(){
        showLayerRegister();
    });

    function showLayer() {
        $("#protocolName").html("京东钱包服务协议");
        seajs.use('financial/common/module/popup/1.0.0/js/popup', function (pop) {
            $(".protocol-container").load(contextPath+"html/protocol.htm .service-con", function () {
                pop.showLayer($('.protocol-popup'));
            });
        });
    }

    function showLayerRegister() {
        $("#protocolName").html("用户注册服务协议");
        seajs.use('financial/common/module/popup/1.0.0/js/popup', function (pop) {
            $(".protocol-container").load(contextPath+"html/protocolRegister.htm .service-con", function () {
                pop.showLayer($('.protocol-popup'));
            });
        });
    }


    $('.close-popup').click(function(){
        seajs.use('financial/common/module/popup/1.0.0/js/popup', function(pop){
            pop.hideLayer($('.protocol-popup'));
        });
    });

    $('.protocol-btn').click(function(){
        seajs.use('financial/common/module/popup/1.0.0/js/popup', function(pop){
            pop.hideLayer($('.protocol-popup'));
            $("#agree").addClass("checked");
            $("#register-now").removeClass('disabled-btn');
        });
    });


    });
