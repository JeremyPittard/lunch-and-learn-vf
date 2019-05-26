fadeTopItems();
function fadeTopItems() {
  var Opaque = false;
  $(document).on("click", function() {
    if (Opaque === false && !$(".final-slide").hasClass("present")) {
      $(".twitter-wrap").addClass("into-the-fade");
      $(".say-my-name").addClass("into-the-fade");
      $(".jrdev-wrap").addClass("into-the-fade");

      Opaque = true;
    } else if ($(".final-slide").hasClass("present")) {
      $(".twitter-wrap").removeClass("into-the-fade");
      $(".say-my-name").removeClass("into-the-fade");
      $(".jrdev-wrap").removeClass("into-the-fade");
      Opaque = false;
    } else {
      return;
    }
  });

  $(document).on("keydown", function() {
    if (Opaque === false && !$(".final-slide").hasClass("present")) {
      $(".twitter-wrap").addClass("into-the-fade");
      $(".say-my-name").addClass("into-the-fade");
      $(".jrdev-wrap").addClass("into-the-fade");

      Opaque = true;
    } else if ($(".final-slide").hasClass("present")) {
      $(".twitter-wrap").removeClass("into-the-fade");
      $(".say-my-name").removeClass("into-the-fade");
      $(".jrdev-wrap").removeClass("into-the-fade");
      Opaque = false;
    } else {
      return;
    }
  });
}
