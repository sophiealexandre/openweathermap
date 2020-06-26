// Fetch city

function getValue() {


     // val is "Hello";
    var city = document.getElementById("in").value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+apiKey)
          .then(response => response.json())
          .then(data => {

                var city = data.name
                var country = data.sys.country
                var weather = data.weather[0].description
                var currentTemp = data.main.temp
                var minTemp = data.main.temp_min
                var maxTemp = data.main.temp_max
                var kelvin = 273
                var icon = data.weather[0].icon
                var adressImg = ('http://openweathermap.org/img/wn/'+icon+'@2x.png')
                var styleImg = ('width: 120px; height: 120px')
                var tempInCelsius = currentTemp - kelvin
                var minTempInCelsius = minTemp - kelvin
                var maxTempInCelsius = maxTemp - kelvin



                 function convertTime(unixTime){
                    let dt = new Date(unixTime * 1000)
                    let h = dt.getHours()
                    let m = "0" + dt.getMinutes()
                    let t = h + ":" + m.substr(-2)
                    return t
                }
                  let sunrise = convertTime(data.sys.sunrise)
                  let sunset = convertTime(data.sys.sunset)


                txtsunset = "Sunset: " + sunset
                txtsurise = "Sunrise: "  +  sunrise



                txt = "The weather is: " + weather
                txt1 = "Current temperature: " + tempInCelsius.toFixed(1) + " °C."
                txt2 = "Minimum temperature: " +  minTempInCelsius.toFixed(1) + " °C."
                txt3 = "Maximum temperature: " + maxTempInCelsius.toFixed(1) + " °C."
                txtwhere = city + ", " +country
                document.getElementById("sunset").innerHTML = txtsunset
                document.getElementById("sunrise").innerHTML = txtsurise

                document.getElementById("city").innerHTML = txtwhere
                document.getElementById("weather").innerHTML = txt
                document.getElementById("weather1").innerHTML = txt1
                document.getElementById("weather2").innerHTML = txt2
                document.getElementById("weather3").innerHTML = txt3
                document.getElementById("weather4").src = adressImg
                document.getElementById("weather4").style = styleImg


                var show = document.getElementById("forecast");
                if (show.style.display === "none") {
                  show.style.display = "block";
                } else {
                  show.style.display = "none";
                }
                var show2 = document.getElementById("question");
                if (show2.style.display === "none") {
                  show2.style.display = "block";
                } else {
                  show2.style.display = "none";
                }

                var show3 = document.getElementById("myDIV");
                if (show3.style.display === "none") {
                  show3.style.display = "block";
                } else {
                  show3.style.display = "none";
                }
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
