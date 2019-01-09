$('#muse').on('click', function() {
    $('#bott').toggleClass('bottomq nexe');
})
$('.register-top').on('click', 'h3', function() {
    $(this).addClass('vip-text').siblings().removeClass('vip-text');
    $('.lenden,.phonelood').toggleClass('over');
});
var key = {
    keyname: false,
    keypwd: false
}
$('#name').on('blur', function() {
    if (!$('#name').val()) {
        $('#name~em').addClass('icon-chacha');
        $('#nameww').addClass('borxoc');
        $('#err1').html('请输入登录名');
        key.keyname = false;
        fn();
    } else {
        $('#name~em').removeClass('icon-chacha');
        $('#nameww').removeClass('borxoc');
        $('#err1').html('');
        key.keyname = true;
        fn();
    }
});
$('#pwd').on('blur', function() {
    if (!$('#pwd').val()) {
        $('#pwd~em').addClass('icon-chacha');
        $('#namewe').addClass('borxoc');
        $('#err2').html('请输入登录名');
        key.keypwd = false;
        fn();
    } else {
        $('#pwd~em').removeClass('icon-chacha');
        $('#namewe').removeClass('borxoc');
        $('#err2').html('');
        key.keypwd = true;
        fn();
    }
});

function fn() {
    if (key.keyname && key.keypwd) {
        $('#sub').removeAttr('disabled');
        console.log(key.keyname);
        console.log(key.keypwd);
    } else {
        $('#sub').attr('disabled', 'disabled');
        console.log(key.keyname);
        console.log(key.keypwd);
    }
}
$('#sub').on('click', function(e) {
    e.preventDefault();
    var dat = Number;
    if ($('#checkbox').prop('checked')) {
        dat = 10000;
    }
    $.ajax({
        'url': '../vip-imtes/php/loding.php',
        'type': 'get',
        'data': {
            "name": $('#name').val(),
            "pwd": $('#pwd').val()
        },
        'dataType': 'json',
        success: function(xhr) {
            if (xhr.err) {
                setCookie("newname", $('#name').val(), dat);
                location.href = "../vip-imtes/index.html";
            } else {
                $('#lins').html(xhr.tetx);
                console.log(xhr.tetx);
            }
        }
    })
})