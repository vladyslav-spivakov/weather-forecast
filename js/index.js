document.addEventListener("DOMContentLoaded", init());

function init(){
    $(".toast").toast({
        autohide: false,
    })
    $('.toast').toast('show');
}