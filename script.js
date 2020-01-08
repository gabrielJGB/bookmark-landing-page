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

document.querySelector('.tab-1').style['border-bottom'] = 'solid 5px rgb(218, 63, 63)';

function tabSelector(numeroTab){
    const $tabSelector = document.querySelectorAll('.tab-container a');
    
    $tabSelector.forEach(function(i){
        i.style['border-bottom'] = "";
    })

    const $x = document.querySelector('.tab-'+numeroTab);
   $x.style['border-bottom'] = 'solid 5px rgb(218, 63, 63)';

   const $tabs = document.querySelectorAll('.tab');
   
   $tabs.forEach(function(i){
        i.style.display='none';
   })

   const $tabMostrar = document.querySelector('.tab'+numeroTab);
   $tabMostrar.style.display = 'flex';
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


