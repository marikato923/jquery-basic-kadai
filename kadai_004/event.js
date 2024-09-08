$(document).ready(function() {

    // htmlドキュメントを読み込み完了した際にコンソールに出力
    $(window).on('load', () => {
        console.log('loadイベントが発生しました');
    });

    // 画面をスクロールしたときにコンソールに出力
    $(window).on('scroll', () => {
        console.log('scrollイベントが発生しました');

    });
});