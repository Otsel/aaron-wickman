$(function(){
  function getRandInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  $('.color-wheel').on('click', function(){
    color = getRandInt(0, colors.length);
    currentColor = colors[color];
    console.log(currentColor);

    $('body').css('background-color', currentColor);

    $(".card").mouseover(function() {
      $(this).css('color', currentColor);
    }).mouseout(function() {
      $(this).css('color', "white");
    });

    subheader = getRandInt(0,2);
    $(".sub-header").html(subheaders[subheader]);
  });

  var colors = [
    "#191D22",
    "#225680",
    "#56C0BF",
    "#FF715B",
    "#39CCCC",
    "#3d8faf",
    "#001f3f",
    "#FF4136",
    "#0057a3",
    "#3D9970",
    "#AAAAAA",
  ];

  color = getRandInt(0, colors.length);
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

  var subheaders = [
    "Brilliant Web Development" ,
    "Excellent UI/UX Design" ,
    "Incredibly Responsive"
  ];

  var subheader = getRandInt(0,2);

  $(".sub-header").html(subheaders[subheader]);

});