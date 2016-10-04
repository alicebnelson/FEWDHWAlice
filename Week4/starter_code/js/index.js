$(document).ready(function(){

  $("a").on("click", function(event){
    event.preventDefault();
  });

  $(".readmore").on("click", function(){
    $("#show-this-on-click").slideToggle();
    $(".readmore").hide();
    $(".readless.hide").show();
  });

  $(".readless.hide").on("click", function(){
    $("#show-this-on-click").slideToggle();
    $(".readmore").show("fast");
    $(".readless.hide").hide("slow");
  });

  $(".learnmore").on("click", function(){
    $("#learnmoretext").slideToggle();
    $(".learnmore").hide();

  });


});
