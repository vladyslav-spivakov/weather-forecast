let i = 0;

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
   fetch(url) 
    .then(response => response.json())
    .then(content => {
       
    })
    .catch(err => {
        console.error(err);
    });
}