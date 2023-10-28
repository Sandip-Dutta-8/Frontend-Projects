const contextmenu = document.querySelector(".container"),
    shareMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    
    let x = e.offsetX, y = e.offsetY,
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    cmwidth = contextmenu.offsetWidth;
    cmheight = contextmenu.offsetHeight;
    
    x = x > windowWidth - cmwidth ? windowWidth - cmwidth : x;
    y = y > windowHeight - cmheight ? windowHeight - cmheight : y;
    
    contextmenu.style.left = `${x}px`;
    contextmenu.style.top = `${y}px`;
    contextmenu.style.visibility = "visible";

    if(x > (windowWidth - cmwidth - shareMenu.offsetWidth)){
        shareMenu.style.left = "-200px"
    }else{
        shareMenu.style.left = "";
        shareMenu.style.right = "-190px"
    }
});

document.addEventListener("click", () => {
    contextmenu.style.visibility = "hidden";
})