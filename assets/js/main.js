
$(document).ready(function () {
  // NAVBAR JS
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $("nav").css({
        background: "#222568",
        // "box-shadow": "0 0 7px #777",
        transition: ".3s ease-in-out",
      });
    } else {
      $("nav").css({
        background: "rgba(34, 37, 104, 0.5)",
        "box-shadow": "none",
      });
    }
  }); 
});
 