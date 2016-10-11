$(document).ready(function() {

  //
  //
  //capture click event
  //  capture value of the text box and assign it to a variable
  //  call function changePic
  //  clear text
  //
  //  function changePic(){
  //    if New York or New York City or NYC
  //      then show nyc.jpg background
  //    else if San Francisco or SF or Bay Area
  //     then show sf.jpg background
  //    else if LA or LAX or Los Angeles
  //     then show la.jpg background
  //    else if Austin or ATX
  //      then show austin.jpg background
  //    else if Sydney or SYD
  //     then show sydney.jpg background
  //    };
  //


  $("#submit-btn").on("click",function(event){
    event.preventDefault();
    var city = $("#city-type").val().trim();
    changePic(city);
    $("#city-type").val("");

  });

  function changePic (city){
    var lowerCaseCity=city.toLowerCase();
    if (lowerCaseCity === "new york" || lowerCaseCity === "new york city" || lowerCaseCity === "nyc") {
      $("body").attr("class","nyc");
    } else if (lowerCaseCity === "sf" || lowerCaseCity === "bay area" || lowerCaseCity === "san francisco") {
      $("body").attr("class","sf");
    } else if (lowerCaseCity === "austin" || lowerCaseCity === "atx") {
      $("body").attr("class","austin");
    } else if (lowerCaseCity === "los angeles" || lowerCaseCity === "la" || lowerCaseCity === "lax") {
      $("body").attr("class","la");
    } else if (lowerCaseCity === "sydney" || lowerCaseCity === "syd") {
      $("body").attr("class","sydney");
    }
  }
});
