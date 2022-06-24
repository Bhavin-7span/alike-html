/**
 * Device Type
 * Sets the device type based on the size of window.
 */

window.__device = "desktop";

function setDevice() {
  if ($(window).width() < 576) {
    __device = "phone";
  } else if ($(window).width() < 768) {
    __device = "phablet";
  } else if ($(window).width() < 992) {
    __device = "tablet";
  } else if ($(window).width() < 1024) {
    __device = "laptop";
  } else {
    __device = "desktop";
  }
}
$(function () {
  setDevice();
  $(window).resize(function () {
    setDevice();
  });
});

/**
 * Executes the device specific functions
 * @param {Array} devices Expects the name of devices
 * @param {Function} callback When the __device meets one of the item provided in devices
 * @param {Function} callbackElse When the __device does not meet any of the devices provided
 */
function onDevice(devices, callback, callbackElse) {
  if (devices.includes(__device)) {
    callback();
  } else {
    callbackElse();
  }
  $(window).resize(function () {
    if (devices.includes(__device)) {
      callback();
    } else {
      callbackElse();
    }
  });
}

$(document).ready(function () {
  $(function () {
    onDevice(
      ["desktop"],
      function () {
        $(".place-tabs").slick({
          slidesToShow: 11,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          focusOnSelect: true,
        });
      },
      function () {}
    );
  });

  $(".places-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".cities-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 5000,
    // cssEase: "linear",
    // pauseOnHover: true,  
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slider--arrow"><i class="bi bi-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slider--arrow"><i class="bi bi-chevron-right"></i></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          // infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $('.place-tabs  a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    e.target;
    e.relatedTarget;
    let currentId = $(this).attr("href");
    $(currentId).addClass("active");
    $(currentId).siblings().removeClass("active");

    $(this).parents().find("a.nav-link").removeClass("active");
    $(".places-slider").slick("setPosition", 0);
  });

  $(".custom-dropdown__label").click(function () {
    if ($(".custom-dropdown").hasClass("is-active")) {
      $(".custom-dropdown").removeClass("is-active");
    } else {
      $(".custom-dropdown").addClass("is-active");
    }
  });

  $(".place-tabs .nav-link").click(function () {
    let currentText = $(this).text();
    $(".custom-dropdown__label span").text(currentText);
    $(".custom-dropdown").removeClass("is-active");
  });
});
