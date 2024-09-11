$(function (){
    let target = $('#target');

    // 文字色変化
    $('#change-color').on('click', function() {
        if (target.css('color') === 'red' || target.css('color') === 'rgb(255, 0, 0)' ){
            target.css('color', 'black');
        } else {
            target.css('color', 'red');
            }
    });

    // 文字内容変化
    $('#change-text').on('click', function() {
        if (target.text() !== 'こんにちは！') {
            target.text('こんにちは！');
        } else {
            target.text('こんばんは！');
        }
    });

    // フェードアウト
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // フェードイン
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });

});