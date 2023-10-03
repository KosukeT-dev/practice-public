var omikujiResult = [
  "大吉",
  "吉",
  "中吉",
  "小吉",
  "末吉",
  "凶"
];

$(function() {
  $("#omikujiBtn").click(function() {
    var btn = $(this);
    btn.prop("disabled", true);
    // おみくじを振る
    $("#omikujiImg").addClass("buruburu");
    // ブルブルを止める
    setTimeout(function() {
      $("#omikujiImg").removeClass("buruburu");
    }, 1500);
    // おみくじをひっくり返す
    setTimeout(function() {
      $("#omikujiImg").addClass("rotate");
    }, 3000);
    // 結果が表示される
    setTimeout(function() {
      var result = omikujiResult[Math.floor( Math.random() * omikujiResult.length)];
      $("#omikujiResult").html("<div class='omikujiResultInner'>" + result + "</div>");
    }, 5000);
    // リセットする
    setTimeout(function() {
      $("#omikujiResult").html("<img id='omikujiImg' src='assets/omikuji.png'>");
      btn.prop("disabled", false);
    }, 8000);
  });
});