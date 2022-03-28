let layermenu = document.querySelector(".fadelayermenu").addEventListener("click",showmenu)

let buttonmenu = document.querySelector(".menubutton").addEventListener("click",showmenu)

function showmenu(){
    let menu = document.querySelector("nav.sidemenu");
    menu.classList.toggle("showmenu");

    let layermenu = document.querySelector(".fadelayermenu");
    layermenu.classList.toggle("visible")
}



let buttonteam = document.querySelector(".teambutton").addEventListener("click",showteam)

let layerteam = document.querySelector(".fadelayerteam").addEventListener("click",showteam)

function showteam(){
    let team = document.querySelector("nav.sideteam");
    team.classList.toggle("showteam");

    let layermenu = document.querySelector(".fadelayerteam");
    layermenu.classList.toggle("visible")
}