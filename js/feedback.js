
// When the user clicks on div, open the popup
$(document).ready(function(){

  $("#feedbackBtn").click(function(){
    $("#feedbackBox2").fadeOut();
    $("#feedbackBox3").fadeOut();
    $("#feedbackBox1").toggle("fade");

  });

  $("#feedBtn1").click(function(){

    $("#feedbackBox1").fadeOut();
    $("#feedbackBox2").fadeIn();

  });

  $("#feedBtn2").click(function(){

    $("#feedbackBox2").fadeOut();
    $("#feedbackBox3").fadeIn();

    function feedback_complete(){
        $("#feedbackBox3").fadeOut();
    }

    window.setTimeout( feedback_complete, 5000 );

  });

});
