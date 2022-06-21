$(document).ready(function () {
  $('.video-play-icon').click(function () {
    var playIcon = $(this);
    var videoCover = playIcon.closest('.video-cover');
    if (videoCover.find('video').length) {
      var video = videoCover.find('video').get(0);
      videoCover.addClass('reveal-video');
      video.play();
      console.log('videoPlay');
      return false;
    } else if (videoCover.find('iframe').length) {
      var iframe = videoCover.find('iframe');
      iframe.attr('src', iframe.attr('data-src'));
      videoCover.addClass('reveal-video');
      console.log('videoPlay Stop');
      return false;
    }
  });
});