$(document).ready(function(){

  if($(window).width() < 500) $(".link-label").hide();

  if($(window).width() < 800)  $(".tab").css({"width": "20%", "font-size": "0.6em"});

  $(window).resize(function(){

    if($(window).width() < 500) $(".link-label").hide();
    else  $(".link-label").show();

    if($(window).width() < 800)  $(".tab").css({"width": "20%", "font-size": "0.6em"});
    else $(".tab").css({"width": "12%", "font-size": "0.8em"});

  });

});
