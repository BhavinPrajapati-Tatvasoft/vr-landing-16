$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------
  $(".btn-search").click(function () {
    $("body").addClass("open-search");
  });
  $(".search-bar .close-btn").click(function () {
    $("body").removeClass("open-search");
  });

  // Theme Settings
  if (!localStorage.getItem("myTheme"))
    localStorage.setItem("myTheme", "theme-light");
  $("html").addClass(localStorage.getItem("myTheme"));
  if (localStorage.getItem("myTheme") == "theme-dark")
    $(".change-theme-checkbox").prop("checked", true);

  $(".change-theme-checkbox").change(function () {
    $("html").removeClass(localStorage.getItem("myTheme"));
    if ($(this).prop("checked") == true)
      localStorage.setItem("myTheme", "theme-dark");
    else localStorage.setItem("myTheme", "theme-light");

    $("html").addClass(localStorage.getItem("myTheme"));
  });

  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
