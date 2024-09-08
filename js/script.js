$(function() {
  // class属性の先頭が[sample]の要素だけを抽出する
  const text = $('li[class^="sample"]').text();
  console.log(text);
})
