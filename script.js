


// Fetch city
function getValue() {
    // Select input
    var city = document.getElementById("in").value;
    console.log(city);

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=c5b94588fc705c9a7db7414f6c086aeb')
          .then(response => response.json())
          .then(data => {
                console.log("My weather is", data.weather[0].description)
                console.log("My temp is", data.main.temp)
                console.log("My temp is", data.main.temp_min)
                console.log("My temp is", data.main.temp_max)



                var weather = data.weather[0].description
                var currentTemp = data.main.temp
                var minTemp = data.main.temp_min
                var maxTemp = data.main.temp_max
                var kelvin = 273

                var tempInCelsius = currentTemp - kelvin
                var minTempInCelsius = minTemp - kelvin
                var maxTempInCelsius = maxTemp - kelvin

                txt = "The weather is " + weather
                txt1 = "The current temperature is " + tempInCelsius.toFixed(1) + " °C."
                txt2 = "The minimum temperature is " +  minTempInCelsius.toFixed(1) + " °C."
                txt3 = "The maximum temperature is " + maxTempInCelsius.toFixed(1) + " °C."
                document.getElementById("weather").innerHTML = txt;
                document.getElementById("weather1").innerHTML = txt1;
                document.getElementById("weather2").innerHTML = txt2;
                document.getElementById("weather3").innerHTML = txt3;
           });
}





// Drag and Drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  document.getElementById("demo").innerHTML = "Choose carefully!";
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  if (data === "sun") {
    document.getElementById("demo").innerHTML = "Great choice!";

  }
    else
    document.getElementById("demo").innerHTML = "Looking good, will the weather think so?";

}




function myFunction() {

// Hide first part

            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }

// Show second part

          var y = document.getElementById('myDIV2');
          if (y.style.display === 'none') {
            y.style.display = 'block';
          } else {
            y.style.display = 'none';
          }


          }
