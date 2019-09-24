
document.getElementById("button-addon1").addEventListener("click", getMyData);
document.getElementById("information").style.display = "none";

//var cityName = " "

document.getElementById("currentButton").addEventListener("click", getCurrentPosition);


var dummy = getCurrentPosition();
// function getCurrentLoc(){
//   var lat = position.coordinates.latitude;
//   console.log (lat);
// }

function getMyData() {
  console.log("button pressed, here is the data");
  
  document.getElementById("information").style.display = "block";
  
  //set const to URL API

  const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = ",us&APPID=b767ab5374552a0f308785e30d6322ab";

  //set zipcode

  var zipCode = document.getElementById("zipForm").value;
  console.log(zipCode);

  fetch(URL + zipCode + apiKey) //pull from dynamic URL
    .then(function (x) {                        //pull response and convert to json
        if(x.status == 404){
          console.log(x.status);
          var error = "That's not a zip code, try again";
          var blank = "";
          document.getElementById("cityName").innerHTML = error;
          document.getElementById("information").style.display = "block";
        }
        else{
          
      console.log(x.status);
      return x.json(); }                         //return response
    })
    .then(function (jsonData) {                        //console log returned data
      console.log(JSON.stringify(jsonData));
      cityName = jsonData.name;
      cityTempK = (jsonData.main.temp).toFixed(1) + "°K";
      cityTempC = (jsonData.main.temp - 273.15).toFixed(1) + "°C";
      cityTempF = ((jsonData.main.temp - 273.15) * 9 / 5 + 32).toFixed(1) + "°F";
      cityCond = jsonData["weather"]["0"]["description"];
      cityIcon = "<img src = 'http://openweathermap.org/img/w/" + jsonData["weather"]["0"]["icon"] + ".png'>";
      console.log(cityCond);

      returnData();
    })

  //document.getElementById("cityName").innerHTML = cityName;
}

function returnData() {
  document.getElementById("cityName").innerHTML = cityName;
  document.getElementById("cityCond").innerHTML = cityCond;
  document.getElementById("cityIcon").innerHTML = cityIcon;
  document.getElementById("fahr").innerHTML = cityTempF;
  document.getElementById("celc").innerHTML = cityTempC;
  document.getElementById("kelv").innerHTML = cityTempK;
  //console.log(cityIcon);
};




