// $(document).ready(function () {
//   $('.video-play-icon').click(function () {
//     var playIcon = $(this);
//     var videoCover = playIcon.closest('.video-cover');
//     if (videoCover.find('video').length) {
//       var video = videoCover.find('video').get(0);
//       videoCover.addClass('reveal-video');
//       video.play();
//       console.log('videoPlay');
//       return false;
//     } else if (videoCover.find('iframe').length) {
//       var iframe = videoCover.find('iframe');
//       iframe.attr('src', iframe.attr('data-src'));
//       videoCover.addClass('reveal-video');
//       console.log('videoPlay Stop');
//       return false;
//     }
//   });
// });

$(document).ready(function() {
    $('.place__wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: "linear",
        pauseOnHover: true,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3.5,
                    infinite: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1.5,
                }
            }
        ],
    });

    $('.cities-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: "linear",
        pauseOnHover: true,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3.5,
                    infinite: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1.5,
                }
            }
        ],
    });

});