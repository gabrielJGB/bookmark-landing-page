function openNav() {
    document.querySelector('#mySidenav').style.width = "100%";
}
function closeNav() {
        document.querySelector('#mySidenav').style.width = "0";
}

function cambiarAnchoMenu(){
    if (!x.matches){
        document.querySelector('#mySidenav').style.width = "auto";
    }
    else{
        document.querySelector('#mySidenav').style.width = "0";
    }
}

var x = window.matchMedia("(max-width: 800px)");
x.addListener(cambiarAnchoMenu);

