$(document).ready(function(){
    $('.main-menu').stickThis();
});
$(".btn-group > .btn").click(function() {
  $(".btn-group > .btn").removeClass("active");
  $(this).addClass("active");
});

