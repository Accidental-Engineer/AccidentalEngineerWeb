$(document).ready(function(){

  if($(window).width() < 500) $(".link-label, .link-label-footer").hide();

  if($(window).width() < 800)  $(".tab").css({"width": "20%", "font-size": "0.65em"});

  $(window).resize(function(){

    if($(window).width() < 500) $(".link-label, .link-label-footer").hide();
    else  $(".link-label, .link-label-footer").show();

    if($(window).width() < 800)  $(".tab").css({"width": "20%", "font-size": "0.65em"});
    else $(".tab").css({"width": "12%", "font-size": "0.8em"});

  });

});
