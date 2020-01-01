let i = 0;
const API = "a43a6ae7c50303f26096dc3753718fac";
let city = "London";
let temp = "";
let status = "";

document.addEventListener("DOMContentLoaded", init());

function init(){
    createToast();
    getWeather();
}

function createToast() {
    let newPopUp = document.createElement("div");
    newPopUp.className = "pop-up";
    newPopUp.id = "pop-up" + i;
    newPopUp.innerHTML = '<div class="toast" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Weather-Partly-Cloudy-Rain-icon.png" class="toast-ico rounded mr-2" alt="..."> <strong class="mr-auto">Bootstrap</strong> <small>11 mins ago</small> <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="toast-body"> Hello, world! This is a toast message. </div> </div></div>'
    document.querySelector('.pop-ups').appendChild(newPopUp);
    $('.pop-up[id=pop-up'+i+'] .toast').toast('show');
    i++;
}

function getWeather(){ 
    url = "https://api.openweathermap.org/data/2.5/forecast?q=" + "London" + "&appid=" + API; 
   
    $.getJSON(url, function(json) {
    alert(json);
    });     
        
}