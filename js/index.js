let i = 0;
const API = "a43a6ae7c50303f26096dc3753718fac";
let city = "Lviv";
let status = "";
let temp = 000;

document.addEventListener("DOMContentLoaded", init());

function init(){
    getWeather("Lviv");
    getWeather("London")
}

function createToast() {
    let newPopUp = document.createElement("div");
    newPopUp.className = "pop-up";
    newPopUp.id = "pop-up" + i;
    newPopUp.innerHTML = '<div class="toast" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Weather-Partly-Cloudy-Rain-icon.png" class="toast-ico rounded mr-2" alt="..."> <strong class="mr-auto">'+city+'</strong> <small>weather</small> <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="toast-body"> Hello, temperature in '+ city+ ' is '+ temp+' celcium!'+'</div> </div></div>'
    document.querySelector('.pop-ups').appendChild(newPopUp);
    $('.pop-up[id=pop-up'+i+'] .toast').toast('show');
    i++;
}

function getWeather(c){
    city = c; 
    url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + API; 
   
    fetch(url)
        .then(response => response.json())
        .then(content =>{
            console.log(content);
            temp= content.list[0].main.temp - 273.15;
            console.log(temp);
            createToast();
        })
        .catch(err => console.log(err));

    
    
}