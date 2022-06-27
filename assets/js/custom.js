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
          responsive: [
            {
              breakpoint: 1280,
              settings:{
                slidesToShow: 10
              }
            }
          ]
        });
      },
      function () {}
    );
  });

  $('.show__more').on('click', function() {
    let _this = $(this);
    setTimeout(function(){
      let element = `<div class="col-6 col-md-3 mt-4">
      <div class="common-card">
                  <a href="javascript:;" class="d-block common-card__media position-relative">
                    <div class="place-overlay position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100">
                    </div>
                    <img class="common-card__image" src="assets/img/dubai.png" alt="dubai">
                    <p class="common-card__title">
                      Dubai</p>
                  </a>
                </div>
                <ul class="mt-2 ps-4 d-none d-md-block">
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Dubai Burj Khalifa
                      Tour</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">SIM Cards</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Global Village</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">72 Hours of Fun</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-3 mt-4">
                <div class="common-card">
                  <a href="javascript:;" class="d-block common-card__media position-relative">
                    <div class="place-overlay position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100">
                    </div>
                    <img class="common-card__image" src="assets/img/abu-dhabi.png" alt="abu-dhabi">
                    <p class="common-card__title">
                      Abu Dhabi</p>
                  </a>
                </div>
                <ul class="mt-2 ps-4 d-none d-md-block">
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Al Ain City Tour</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Falcon Tour Abu Dhabi
                    </a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Sunrise Desert
                      Safari</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">4
                      Day Family Trip</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-3 mt-4">
                <div class="common-card">
                  <a href="javascript:;" class="d-block common-card__media position-relative">
                    <div class="place-overlay position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100">
                    </div>
                    <img class="common-card__image" src="assets/img/phuket.png" alt="phuket">
                    <p class="common-card__title">
                      Phuket</p>
                  </a>
                </div>
                <ul class="mt-2 ps-4 d-none d-md-block">
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Things to do</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">SIM Cards</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Burj Khalifa</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Weekend Getaway</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-3 mt-4">
                <div class="common-card">
                  <a href="javascript:;" class="d-block common-card__media position-relative">
                    <div class="place-overlay position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100">
                    </div>
                    <img class="common-card__image" src="assets/img/bangkok.png" alt="bangkok">
                    <p class="common-card__title">
                      Bangkok</p>
                  </a>
                </div>
                <ul class="mt-2 ps-4 d-none d-md-block">
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Things to do</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">SIM Cards</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Burj Khalifa</a>
                  </li>
                  <li>
                    <a class="dark-gray fs-6 fw-normal d-block asia-link mt-1" href="javascript:;">Weekend Getaway</a>
                  </li>
                </ul>
                      </div>`
      _this.parents('.popular-list').append(element);
      _this.parents('.popular-list .btn-card').hide();
    },1000)
  })

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
          dots: true,
          arrows: false,
        },
      }
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
