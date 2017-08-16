$(function(){
  function getRandInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  $('.color-wheel').on('click', function(){
    color = getRandInt(0, 3);
    currentColor = colors[color];
    console.log(currentColor);

    $('body').css('background-color', currentColor);

    $(".card").mouseover(function() {
      $(this).css('color', currentColor);
    }).mouseout(function() {
      $(this).css('color', "white");
    });
  });

  var colors = [
    "#191D22",
    "#225680",
    "#56C0BF",
    "#FF715B"
  ];

  color = getRandInt(0, 3);
  currentColor = colors[color];
  console.log(currentColor);

  $('body').css('background-color', currentColor);
  $('.card').hover(function(){
    $(this).css('color', currentColor);
  });

  $(".card").mouseover(function() {
    $(this).css('color', currentColor);
  }).mouseout(function() {
    $(this).css('color', "white");
  });

});
