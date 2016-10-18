$(document).ready(function() {

//Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD";
//Append options to the select
  //use for loop to populate the select control
//when user selects a city
  //the background will change based on the city that was selected


  var cities = [
    "<option value='NYC'>NYC</option>",
    "<option value='SF'>SF</option>",
    "<option value='LA'>LA</option>",
    "<option value='ATX'>ATX</option>",
    "<option value='SYD'>SYD</option>"
  ];

  for(var i = 0; i < cities.length; i++){
    $("#city-type").append(cities[i]);
  }

  $("#city-type").on("change", function (){
    var city =$("#city-type").val();
    changeBackground (city);
  });

  function changeBackground (city) {
    if (city === "NYC"){
      $("body").attr("class","nyc");
    } else if (city === "SF"){
      $("body").attr("class","sf");
    } else if (city === "LA"){
      $("body").attr("class", "la");
    } else if (city === "ATX"){
      $("body").attr("class", "austin");
    } else if (city === "SYD"){
      $("body").attr("class","sydney");
    }

  }








});
