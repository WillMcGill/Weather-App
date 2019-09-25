
document.getElementById("button-addon1").addEventListener("click", getMyData);
document.getElementById("information").style.display = "none";

//var cityName = " "




//var dummy = getCurrentPosition();
// function getCurrentLoc(){
//   var lat = position.coordinates.latitude;
//   console.log (lat);
// }

function getMyData() {
  console.log("button pressed, here is the data");
  
  document.getElementById("information").style.display = "block";
  
  //set const to URL API

  const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = ",us&APPID=b767ab5374552a0f308785e30d6322ab";

  //set zipcode

  var zipCode = (document.getElementById("zipForm").value).slice(0,6);
  var zipCodeEdit = zipCode.slice(0,5);
  console.log(zipCode);

  fetch(URL + zipCodeEdit + apiKey) //pull from dynamic URL
    .then(function (x) {                        //pull response and convert to json
        if(x.status == 404){
          console.log(x.status);
          alert('Not a valid zip code');
          document.getElementById("button-addon1").addEventListener("click", getMyData);
          document.getElementById("information").style.display = "none";
          
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




