// This part will handle the tilt effect on hover
$('.square').on('mousemove', function (e) {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  $(this).css('transform', `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`);
});

$('.square').on('mouseleave', function () {
  $(this).css('transform', 'rotateY(0deg) rotateX(0deg)');
});
