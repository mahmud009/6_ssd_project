$(function() {
  $(".clickable-link").on("mouseover", function() {
    $(this)
      .find(".click-suggest")
      .addClass("click-enabled");
  });

  $(".clickable-link").on("mouseleave", function() {
    $(this)
      .find(".click-suggest")
      .removeClass("click-enabled");
  });
});
