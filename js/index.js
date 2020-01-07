let i = 0;
let inp = "";
const API = "a43a6ae7c50303f26096dc3753718fac";
let city = "Lviv";
let status = "";
let temp = 000;
let cities = [];
let errC = 0;
let errM = "";

document.addEventListener("DOMContentLoaded", init());

document.querySelector("#find-icon").addEventListener("click", checkInput);

function init(){
    
}

function checkInput(){
    inp = document.querySelector("header .find-div input").value;
    if  (inp === "") {
        document.querySelector("header .find-div input").setAttribute('placeholder','ENTER CITY!!!!!!!!')
        createErrorToast("404", "You didn`t enter a city name!")
    } else {
        document.querySelector("header .find-div input").setAttribute('placeholder','Enter city')
        getWeather(inp);
        document.querySelector("header .find-div input").value = "";
    }
}

function createToast() {
    let newPopUp = document.createElement("div");
    newPopUp.className = "pop-up";
    newPopUp.id = "pop-up" + i;
    newPopUp.innerHTML = '<div class="toast" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Weather-Partly-Cloudy-Rain-icon.png" class="toast-ico rounded mr-2" alt="..."> <strong class="mr-auto">'+city+'</strong> <small>weather</small> <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="toast-body"> Hello, temperature in '+ city+ ' is '+ temp+' celcium!'+'</div> </div></div>'
    document.querySelector('.pop-ups').appendChild(newPopUp);
    $('.pop-up[id=pop-up'+i+'] .toast').toast('show');
    i++;
    checkMaxToasts();
}
function createErrorToast(errCode, errMessage) {
    let newPopUp = document.createElement("div");
    newPopUp.className = "pop-up";
    newPopUp.id = "pop-up" + i;
    newPopUp.innerHTML = '<div class="toast" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <img src="https://image.flaticon.com/icons/svg/1199/1199558.svg" class="toast-ico rounded mr-2" alt="..."> <strong class="mr-auto"> Error!</strong> <small>error</small> <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="toast-body"> Sorry, something went wrong. Error code: "'+errCode+'". Message: "'+errMessage+'"</div> </div></div>'
    document.querySelector('.pop-ups').appendChild(newPopUp);
    $('.pop-up[id=pop-up'+i+'] .toast').toast('show');
    i++;
    checkMaxToasts();
}

function checkMaxToasts() {
    if (i>5){
        $('.pop-up[id=pop-up'+(i-6)+'] .toast').toast('dispose');
    }
}

function getWeather(c){
    city = c; 
    url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + API; 
   
    fetch(url)
        .then(response => response.json())
        .then(content =>{
            console.log(content);
            errC=content.cod;
            errM=content.message;
            temp= content.list[0].main.temp - 273.15;
            temp = Math.floor(temp * 10) / 10;
            console.log(temp);
            createToast();
        })
        .catch(err => {
            console.log(err)
            createErrorToast(errC, errM);
        });

    
    
}