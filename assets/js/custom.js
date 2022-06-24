$(document).ready(function () {
  $(".places-slider").slick({
    slidesToShow: 5,
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

  $(".cities-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 5000,
    // cssEase: "linear",
    // pauseOnHover: true,  
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slider--arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#D4CDD4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-next slider--arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#D4CDD4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.5,
          // infinite: true,
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
