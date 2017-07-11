var desoffset;
var scrollcheck = 0;
$(document).ready(function() {
    desoffset = $(".des").offset().top;
});
$(window).scroll(function() {
    var scroll = $(this).scrollTop();

    //console.log(scroll);
    var height = $("#container").height();
    var scp = scroll;
    //console.log(scp);
    //console.log($("#project").offset().top-($(window).height())/2);
    if (scp >= 0 && scp <= $("#project").offset().top) {
        $('#h').addClass("tabon");
        $('#p, #s, #a, #c').removeClass("tabon");
    }
    if (scp >= $("#project").offset().top - 1 && scp <= $("#service").offset().top - 1) {
        $('#p').addClass("tabon");
        $('#h, #s, #a, #c').removeClass("tabon");
    }
    if (scp >= $("#service").offset().top - 1 && scp <= $("#contactus").offset().top - 1) {
        $('#s').addClass("tabon");
        $('#h, #p, #a, #c').removeClass("tabon");
    }
    if (scp >= $("#contactus").offset().top - 1 && scp <= $("#about").offset().top - 1) {
        $('#c').addClass("tabon");
        $('#h, #s, #a, #p').removeClass("tabon");
    }
    if (scp >= $("#about").offset().top - 1) {
        $('#a').addClass("tabon");
        $('#h, #s, #c, #p').removeClass("tabon");
    }



    //   console.log(scroll);
    var scroll1 = $('#service').scrollTop();
    $('#home').css({
        'background-position': ' 0px ' + scroll * .4 + 'px  '
    });
    $('#homeimg').css({
        'transform': 'translate(0px, ' + scroll * .6 + 'px ) '
    });
    $('#service').css({
        'background-position': ' 0px ' + (scroll ) * (-0.6) + 'px  '
    });
    $('#about').css({
        'background-position': ' -180px ' + ((scroll - $("#about").offset().top) * (-0.6) -100) + 'px  '
    });
    //var a=$('#service').position();
    //  console.log(a);

    if (scroll > $("#project").offset().top - ($(window).height()) / 2.1) {
        $(".art").each(function(i) {

            setTimeout(function() {
                $(".art"). eq(i).addClass("show");
            }, 150 * (i + 1));



        })
    }
    if (scroll > $("#project").offset().top - ($(window).height()) / 1.4) {
        $(".proani, .hr").each(function() {


            $(".proani, .hr").addClass("show");
        })
    }

    t = scroll - $(".des").offset().top;
    var l = $(window).width() / 2 - 101;
    var l1 = $(".sertab1").width() / 2 - 100;
    var i = 2;

    if (scroll > $(".des").offset().top + 100 - ($(window).height()) / 2 || scroll < $("#contactus").offset().top - ($(window).height())) {

        $(".des").css({
            'position': 'fixed',
            'top': ($(window).height() / 2 - 100) + 'px',
            'left': l + 'px'
        });
        $(".des").removeClass('des1');
        setTimeout(function() {
            i = 1;
        }, 150);



    }
    var height = $("#service").height() - ($(window).height() / 2 - 100) - $("#serhead").height() - 200;
    if (scroll > $("#contactus").offset().top - ($(window).height())) {

        $(".des").css({
            'position': 'relative',
            'top': height + 'px',

            'left': l1 + 'px'
        });

        setTimeout(function() {
            i = 1;
        }, 150);



    }
    //console.log(desoffset);
  //  console.log(scroll - ($("#s2").offset().top - ($(window).height()) / 2 - 100) + " " + scroll - ($("#s3").offset().top - ($(window).height()) / 2 - 100) + " " + scrollcheck);


    var top = 0;
    if (scroll > $("#s2").offset().top - ($(window).height()) / 2 - 100) {
        if ((scroll - ($("#s2").offset().top - ($(window).height()) / 2 - 100)) > 200) {
            scrollcheck = 1;
            top = 204;
        } else {
            top = scroll - ($("#s2").offset().top - ($(window).height()) / 2 - 100)

        }
        $('#si1,#si2,#si3').css({
            "position": "relative",
            "top": -top + "px"
        });


    }
    if (scroll <= $("#s2").offset().top - ($(window).height()) / 2 - 100 && scrollcheck == 1) {

        top = 0;
        $('#si1,#si2,#si3').css({
            "position": "relative",
            "top": -top + "px"
        });

    }


    //third circle
    if (scroll > $("#s3").offset().top - ($(window).height()) / 2 - 100) {
        if ((scroll - ($("#s3").offset().top - ($(window).height()) / 2 - 100)) > 200) {
            scrollcheck = 2;
            top = 408;
        } else {
            top += scroll - ($("#s3").offset().top - ($(window).height()) / 2 - 100)

        }
        $('#si1,#si2,#si3').css({
            "position": "relative",
            "top": -top + "px"
        });


    }
    if (scroll < $("#s3").offset().top - ($(window).height()) / 2 - 100 && scrollcheck == 2) {
           if (scroll < $("#s3").offset().top - ($(window).height()) / 2 - 100){top=0; scrollcheck=1;}
           else top = 200;
        $('#si1,#si2,#si3').css({
            "position": "relative",
            "top": -top + "px"
        });

    }

if (scroll < desoffset) {


        $(".des").css({
            'position': 'relative',
            'top': ($(window).height() / 2 - 100) + 'px',
            'left': l1 + 'px'

        });
    }


// service
  console.log( $("#service").offset().top-($(window).height()));

     if( scroll > $("#service").offset().top-($(window).height())){
       var sertop=Math.min(0,scroll-$('#service').offset().top+$(window).height()-470);
       var opacity=1-(Math.abs(sertop)/470);

         $("#sb1").css({
         'transform': 'translate('+sertop+'px,'+Math.abs(sertop*0.3)+'px)',
         'opacity': opacity
       });
       console.log(sertop);
      }
      if( scroll > $("#service").offset().top-($(window).height())){
        var sertop=Math.min(0,scroll-$('#service').offset().top+$(window).height()-550);
        var opacity=1-(Math.abs(sertop)/470);

          $("#sb2").css({
          'transform': 'translate('+sertop+'px,'+Math.abs(sertop*0.3)+'px)',
          'opacity': opacity
        });
       }
       if( scroll > $("#service").offset().top-($(window).height())){
         var sertop=Math.min(0,scroll-$('#service').offset().top+$(window).height()-630);
         var opacity=1-(Math.abs(sertop)/470);

           $("#sb3").css({
           'transform': 'translate('+sertop+'px,'+Math.abs(sertop*0.3)+'px)',
           'opacity': opacity
         });
        }
// Image circle
     //img circle  1
        if( scroll > $("#service").offset().top-($(window).height())){
          var sertop=Math.min(0,scroll-$('#service').offset().top+$(window).height()-470);
          var opacity=1-(Math.abs(sertop)/470);

            $("#sc1").css({
            'transform': 'translate('+(-sertop)+'px,'+Math.abs(sertop*0.3)+'px)',
            'opacity': opacity
          });
         }
//img circle 2
    if( scroll > $("#service").offset().top-($(window).height())){
      var sertop=Math.min(0,scroll-$('#service').offset().top+$(window).height()-510);
      var opacity=1-(Math.abs(sertop)/470);

        $("#sc2").css({
        'transform': 'translate('+(-sertop)+'px,'+Math.abs(sertop*0.3)+'px)',
        'opacity': opacity
      });
     }
 //img circle 3
     if( scroll > $("#service").offset().top-($(window).height())){
       var sertop=Math.min(0,scroll-$('#service').offset().top+$(window).height()-550);
       var opacity=1-(Math.abs(sertop)/470);

         $("#sc3").css({
         'transform': 'translate('+(-sertop)+'px,'+Math.abs(sertop*0.3)+'px)',
         'opacity': opacity
       });
      }
  //img circle 4
      if( scroll > $("#service").offset().top-($(window).height())){
        var sertop=Math.min(0,scroll-$('#service').offset().top+$(window).height()-590);
        var opacity=1-(Math.abs(sertop)/470);

          $("#sc4").css({
          'transform': 'translate('+(-sertop)+'px,'+Math.abs(sertop*0.3)+'px)',
          'opacity': opacity
        });
       }
   //img circle 2
       if( scroll > $("#service").offset().top-($(window).height())){
         var sertop=Math.min(0,scroll-$('#service').offset().top+$(window).height()-630);
         var opacity=1-(Math.abs(sertop)/470);

           $("#sc5").css({
           'transform': 'translate('+(-sertop)+'px,'+Math.abs(sertop*0.3)+'px)',
           'opacity': opacity
         });
        }


});
