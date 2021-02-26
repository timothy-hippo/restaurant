// 打開側選單
$(document).ready(function() {
  $(".show-hambur").on("click", function(e) {
    e.preventDefault();
    $("body").toggleClass("open");
  });
});
// 關閉側選單
$(".mobile-close").click(function(e) {
  e.preventDefault();
  $("body").removeClass("open");
});

