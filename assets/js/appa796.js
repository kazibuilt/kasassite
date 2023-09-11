(function ($) {

  $(".nav-mobile__hamburger").on("click", function () {
    var $that = $(this);
    if (!$(this).hasClass("is-minimized")) {
      $(".site-header__nav").addClass("is-active");
      $("#site-header").addClass("is-active");
      $that.addClass("is-minimized");
      setTimeout(function () {
        $(".menu-main-container").addClass("is-active");
        $that.addClass("is-collapsed");
      }, 500)
    } else {
      $that.removeClass("is-collapsed");
      $(".menu-main-container").removeClass("is-active");
      setTimeout(function () {
        $that.removeClass("is-minimized");
        $("#site-header").removeClass("is-active");
        $(".site-header__nav").removeClass("is-active");
      }, 500)
    }
  })
  if ($("#intro-header").length) {
    $("#intro-header").fitText(0.87);
  }
  AOS.init();

  var $distanceTarget = $('.newsroom-hero-latest');
  var distance = $distanceTarget.innerHeight();
  var distanceHidden = $distanceTarget.parent().css('display') == 'none';
  var $window = $(window);
  function checkNewsroomHeaderColor() {
    if ($distanceTarget.length > 0) {
      if (!distanceHidden) {
        if ($window.scrollTop() >= distance) {
          console.log(distance)
          $("#site-header").addClass("is-black");
        } else {
          $("#site-header").removeClass("is-black");
        }
      } else {
        $("#site-header").addClass("is-black");
      }
    }
  }
  $window.on("scroll", function () {
    checkNewsroomHeaderColor();
  });

  checkNewsroomHeaderColor();

  $(window).on("resize", function () {
    distanceHidden = $distanceTarget.parent().css('display') == 'none';
    checkNewsroomHeaderColor()
  })

  document.addEventListener('aos:out:header-black', ({ detail }) => {
    $("#site-header").removeClass("is-black");
  });

  document.addEventListener('aos:in:header-black', ({ detail }) => {
    $("#site-header").addClass("is-black");
  });

  $(".employee__read-more-target").on("click", function (event) {
    event.preventDefault();
    var $button = $(this);
    var employee = $button.data("employee");
    var name = $button.data("employee-name");
    var title = $button.data("employee-title");
    var information = $button.data("employee-information");
    var additional = $button.data("employee-additional");
    var html = "<div class='employee__read-more__header'><h3 class='h4'>" + name + "</h3>" + "<div class='p'>" + title + "</div>" + "<div class='color--tint p'>" + additional + "</div></div>" + "<div class='employee__read-more__text'><p>" + information + "</p></div>";
    var $textBoxes = $button.closest(".grid").find(".employee__read-more");
    $(".employee__read-more-target").not($button).removeClass("is-active");
    if ($button.hasClass("is-active")) {
      $button.removeClass("is-active");
      $textBoxes.removeClass("is-active");
    } else {
      $textBoxes.children(".employee__read-more__inner").html(html);
      $button.addClass("is-active");
      $textBoxes.removeClass("is-active");
      $textBoxes.each(function () {
        if ($(this).data("employees").includes(employee)) {
          $(this).addClass("is-active");
        }
      })
    }
  })

  $(".employee__read-more__close").on("click", function () {
    $(".employee__read-more-target").removeClass("is-active");
    $(".employee__read-more").removeClass("is-active");
  })


  $(".video-layer--preview").each(function (index) {
    $(this).attr("data-plyr", index);
  })
  // Init Plyr players
  const plyrPlayers = Array.from(document.querySelectorAll('.plyr-video')).map(p => new Plyr(p, {
    controls: ['play-large', 'play', 'progress', 'mute', 'fullscreen'],
    iconUrl: '../wp-content/themes/heart/css/images/svg.svg'
  }));

  $(".video-layer--preview").on("click", function () {
    $(this).fadeOut(150);
    var index = $(this).data("plyr");
    plyrPlayers[index].play();
  })

  // load more in grids
  $(".load-more__link").on("click", function () {
    $(this).closest('.grid').find('.load-more__hidden').each(function (i) {
      $(this).delay((i + 1) * 50).fadeIn();
    });

    $(this).parent().remove();
  });

  initSlideshows();

  function initSlideshows() {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      spaceBetween: 20,
      autoHeight: true,
      keyboard: {
        enabled: true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

})(jQuery);
