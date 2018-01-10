
$("#passWord").blur(function (e) {
    var passWord = $("#passWord").val();
    if (passWord == '') {
        $("#passWord").parent().parent('li').addClass('verify-erro');
    }else {
        $("#passWord").parent().parent('li').removeClass('verify-erro');
    }

});


$("#newPassWord").blur(function (e) {
    var newPassWord = $("#newPassWord").val();

    var num = 0;
    var number = 0;
    var letter = 0;
    var bigLetter = 0;
    var chars = 0;

    if (newPassWord.search(/[0-9]/) != -1) {
        num += 1;
        number = 1;
    }
    if (newPassWord.search(/[A-Z]/) != -1) {
        num += 1;
        bigLetter = 1;
    }
    if (newPassWord.search(/[a-z]/) != -1) {
        num += 1;
        letter = 1;
    }
    if (newPassWord.search(/[^A-Za-z0-9]/) != -1) {
        num += 1;
        chars = 1;
    }
    if (num >= 2 && (newPassWord.length >= 6 && newPassWord.length <= 20)) {
        $("#newPassWord").parent().parent('li').removeClass('verify-erro');
    } else if (newPassWord.length < 6 || newPassWord.length > 20) {
        $("#newPassWord").parent().parent('li').addClass('verify-erro');
    } else if (num == 1) {
        $("#newPassWord").parent().parent('li').addClass('verify-erro');
    }
});

$("#newPassWordConfirm").blur(function (e) {
    var newPassWordConfirm = $("#newPassWordConfirm").val();
    if (newPassWordConfirm == '') {
        $("#newPassWordConfirm").parent().parent('li').addClass('verify-erro');
    } else if (newPassWordConfirm != $("#newPassWord").val()) {
        $("#newPassWordConfirm").parent().parent('li').addClass('verify-erro');
    } else {
        $("#newPassWordConfirm").parent().parent('li').removeClass('verify-erro');
    }
});




function pwdValidForm(){
    $("#newPassWordConfirm").blur();
    $("#newPassWord").blur();
    $("#passWord").blur();
    if ($("#newPassWordConfirm").parent().parent('li').hasClass('verify-erro')){
        return false;
    }

    if ($("#newPassWord").parent().parent('li').hasClass('verify-erro')){
        return false;
    }

    if ($("#passWord").parent().parent('li').hasClass('verify-erro')){
        return false;
    }

    return true;
}


function pwdCallback(data){
    if(data.code == 200){
        if (data.data.result == "success"){
            $('.center-details-area').html(template("updateSuccess",{ data:[]}));
        }else {
            tipsController("修改失败","请检查原始密码是否正确","javascript:;","确定","");
        }
    }else {
        tipsController("修改失败","请检查原始密码是否正确","javascript:;","确定","");
    }

}
