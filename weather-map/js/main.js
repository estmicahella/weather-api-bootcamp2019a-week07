// window.addEventListener('load', ()=> {
//   let long;
//   let lat;
//
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(position => {
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//
//       const api = `https://api.darksky.net/forecast/61c1fa183087b85144e05850cd8fd93f/${lat}, ${long}`
//
//       fetch(api)
//         .then(response => {
//           return response.json();
//         })
//         .then(response => {
//           console.log
//         })
//     });
//
//
//   }else{
//     h1.textContent('Plese enable location sharing.')
//   }
// });

//create an event listener on the button to run the function to find weather
document.querySelector('form').addEventListener('submit', weather)

//function for determining weather depending on city and country
function weather(e){
//prevents form from resetting the page
  e.preventDefault()
//store city and country input values in variables for JS to use. do not move out of function scope
  let city = document.querySelector('.city').value
  let country = document.querySelector('.country').value

//make a call to openweathermap with city and country value from user input
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id=524901&units=imperial&APPID=6c9b1706890d3e9cc03aef706c486639`)
 //take the json file from api request
   .then(response => response.json())
//use the json file to display the temperature value into the DOM
   .then(function(getJson){
//temp value from json default is in kelvin so use a converter function to display the proper temp in the DOM
    document.querySelector(".temperature").textContent = Math.floor(getJson.main.temp)
  });
}
