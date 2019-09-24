//set const to URL API

const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = ",us&APPID=b767ab5374552a0f308785e30d6322ab";

//set zipcode

var zipCode = 40505;

//Pull data from open weather

function getMyData() {fetch(URL + zipCode + apiKey) //pull from dynamic URL
  .then(function(x) {                        //pull response and convert to json
    console.log(x.json);
   return x.json();                          //return response
  })
  .then(function(jsonData) {                        //console log returned data
    console.log(JSON.stringify(jsonData));
    var city = jsonData.name;
    console.log(city);
  })
  .then(function(weather){
    //var city = weather.name;
    console.log("city");
  })
  ;

}

getMyData();