$(".nav-link").click(function() {
  var id = $(this).attr("href");

  if (
    (id === "#about" || id === "#portfolio" || id === "#contact") &&
    $(this)
      .parent()
      .hasClass("navbar-lg")
  ) {
    $(this)
      .parent()
      .css("background-color", "rgba(0,0,0,0.8");
  } else if (
    $(this)
      .parent()
      .hasClass("navbar-lg")
  ) {
    $(this)
      .parent()
      .css("background-color", "rgba(0,0,0,0.3");
  }
  console.log($("html"));
  $("html").animate(
    {
      scrollTop: $(id + ".section").offset().top - 50
    },
    1500
  );
});
