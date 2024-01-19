let toggleBtn = document.getElementsByClassName("tgl-btn")[0];
let toggleBtnBar = document.getElementsByClassName("bar");
let navLinks = document.getElementsByClassName("nav-links")[0];
let toggleStatus = false;


let toggleNav = () => {
        if(window.screen.width >= 800 && toggleStatus === false){
    
            for(let i = 0; i < toggleBtnBar.length; i++){
                toggleBtnBar[i].style.cssText = "background-color: var(--clr-lb);";
            }

            navLinks.style.cssText = "transform: scaleY(1); opacity: 1;";
            toggleStatus = true;

        } else if(window.screen.width >= 800 && toggleStatus === true){

            for(let i= 0; i < toggleBtnBar.length; i++){
                toggleBtnBar[i].style.cssText = "background-color: var(--clr-db);";
            }

            navLinks.style.cssText = "transform: scaleY(0); opacity: 0;";
            toggleStatus = false;
        }
}

toggleBtn.addEventListener('click', toggleNav);