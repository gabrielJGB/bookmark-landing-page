const $button = document.querySelector('.icon')
        const $header = document.querySelector('.header');
        const $logo = document.querySelector('.logo');

        $button.addEventListener('click', myFunction);

        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
                $header.style['background-color'] = "rgba(8, 5, 63, 0.74)";
                $logo.style.filter = "invert(100%)";
            } else {
                x.className = "topnav";
                $header.style['background-color'] = "unset";
                $logo.style.filter = "invert(0%)";
            }
        }
