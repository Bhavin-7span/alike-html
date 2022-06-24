$(document).ready(function () {
  $(".places-slider").slick({
    slidesToShow: 5,
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
          slidesToShow: 3.5,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });

  $(".cities-wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.5,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });

  $('.place-tabs  a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    e.target;
    e.relatedTarget;
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
    console.log("CurrentText==>", currentText);
    $(".custom-dropdown__label span").text(currentText);
    $(".custom-dropdown").removeClass("is-active");
  });
});
