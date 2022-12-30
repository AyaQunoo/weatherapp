document.querySelector('button').addEventListener('click', displayWeather)
   
function displayWeather(){
    let city = document.querySelector('input').value
     
    fetch("http://api.weatherstack.com/current?access_key=896143c6dc4841e23630df124f33ab89&query="+city)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('h1').innerText = "weather in " +data.location.name;
      document.querySelector('.temp').innerText =  data.current.temperature + "°C ";
      document.querySelector('.description').innerText =data.current.weather_descriptions;
      document.querySelector('.humidity').innerText = "Humidity: " +data.current.humidity + " %"; 
      document.querySelector('img').src =data.current.weather_icons
      document.querySelector('.wind').innerText = "Wind speed: "+data.current.wind_speed +  " kh/h    " + "Dir: " +data.current.wind_dir ;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
   document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ city +";')"

}