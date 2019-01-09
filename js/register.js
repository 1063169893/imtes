var regExp = {
    phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
    rpwd: /^\d{1,}$/,
    zpwd: /^[a-zA-Z]\w{5,17}$/,
    qpwd: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
}
var key = {
    keyphone: false,
    keycoue: true,
    keypwd: false,
    keytowpwd: false,
    keybox: false,
    keyon: false
};
$('#phone').on('blur', function() {
    if (regExp.phone.test($('#phone').val())) {
        $.ajax({
            'url': '../vip-imtes/php/register.php',
            'type': 'get',
            'data': {
                "phone": $('#phone').val()
            },
            'dataType': 'json',
            success: function(xhr) {
                if (xhr.err) {
                    $('#namesss').addClass('errred').html(xhr.tex);
                    $('#phone~em').addClass('icon-chacha').removeClass('icon-dagou1');
                    $('.button').attr("disabled", "false");
                    $('.vip-phone').addClass('errnoe');
                    key.keyphone = false;
                } else {
                    $('#namesss').removeClass('errred').html(xhr.tex);
                    $('#phone~em').removeClass('icon-chacha').addClass('icon-dagou1');
                    $('.button').removeAttr('disabled');
                    $('.vip-phone').removeClass('errnoe');
                    key.keyphone = true;
                    fn();
                }
            }
        });
    } else {
        $('#namesss').addClass('errred').html('请输入正确的手机号码 ');
        $('#phone~em').addClass('icon-chacha').removeClass('icon-dagou1');
        $('.button').attr("disabled", "false");
        $('.vip-phone').addClass('errnoe');
        key.keyphone = false;
        fn()
    }

})
$('#password').on('keyup', function() {
    if ($('#password').val().length < 6) {
        $('#codeyes').addClass('errred').html('密码长度不足');
        $('#password~em').addClass('icon-chacha').removeClass('icon-dagou1');
        $('.vip-pwd').addClass('errnoe');
        key.keypwd = false;
        if (!$('#password').val()) {
            $('#codeyes').addClass('errred').html('密码不能为空');
            $('#password~em').addClass('icon-chacha').removeClass('icon-dagou1');
            $('.vip-pwd').addClass('errnoe');
            key.keypwd = false;
            fn()
        }
    } else {
        if (regExp.qpwd.test($('#password').val())) {
            $('#codeyes').html(`<span class="mimaqiang"><s></s><b>强</b></span><span id="goodcoud">您的密码很强</span>`);
            $('#password~em').addClass('icon-dagou1').removeClass('icon-chacha');
            $('.vip-pwd').removeClass('errnoe');
            key.keypwd = true;
            fn()
        } else if (regExp.zpwd.test($('#password').val())) {
            $('#codeyes').html(`<span class="mimazhong"><s></s><b>中</b></span><span id="goodcoud">密码强度适中</span>`);
            $('#password~em').addClass('icon-dagou1').removeClass('icon-chacha');
            $('.vip-pwd').removeClass('errnoe');
            key.keypwd = true;
            fn()
        } else if (regExp.rpwd.test($('#password').val())) {
            $('#codeyes').html(`<span class="mimaruo"><s></s><b>弱</b></span><span id="goodcoud">密码过于简单，有被盗风险，建议您更改为复杂密码</span>`);
            $('#password~em').addClass('icon-dagou1').removeClass('icon-chacha');
            $('.vip-pwd').removeClass('errnoe');
            key.keypwd = true;
            fn()
        }
    }
});
$('#password').on('blur', function() {
    $('#goodcoud').html('');
})
$('#towpassword').on('blur', function() {
    if (!$('#towpassword').val()) {
        $('#towpassword~em').addClass('icon-chacha').removeClass('icon-dagou1');
        $('.vip-pwd-end').addClass('errnoe');
        $('#twopcoud').html('密码不能为空');
        key.keytowpwd = false;
        fn()
    } else if ($('#password').val() != $('#towpassword').val()) {
        $('#towpassword~em').addClass('icon-chacha').removeClass('icon-dagou1');
        $('.vip-pwd-end').addClass('errnoe');
        $('#twopcoud').html('两次密码不一致');
        key.keytowpwd = false;
        fn()
    } else {
        $('#towpassword~em').addClass('icon-dagou1').removeClass('icon-chacha');
        $('.vip-pwd-end').removeClass('errnoe');
        $('#twopcoud').html('');
        key.keytowpwd = true;
        fn()
    }
});
$('#checkbox').on('click', function() {
    if ($('#checkbox').prop('checked')) {
        key.keybox = true;
        fn()
    } else {
        key.keybox = false;
        fn()
    }
})

function fn() {
    if (key.keyphone && key.keycoue && key.keypwd && key.keytowpwd && key.keybox) {
        $('#okone').removeAttr('disabled');
        console.log(key.keyphone);
        console.log(key.keycoue);
        console.log(key.keypwd);
        console.log(key.keytowpwd);
        console.log(key.keybox);

    } else {
        $('#okone').attr('disabled', 'disabled');
    }
};
$('#okone').on('click', function(e) {
    e.preventDefault();
    $.ajax({
        'url': '../vip-imtes/php/registeradd.php',
        'type': 'get',
        'data': {
            "phone": $('#phone').val(),
            "password": $('#password').val()
        },
        'dataType': 'json',
        success: function(xhr) {
            if (xhr.err) {
                alert(xhr.tex);
                location.href = '../vip-imtes/index.html';
                setCookie('newname', $('#phone').val());
            } else {
                alert(xhr.tex);
            }
        }
    });
})