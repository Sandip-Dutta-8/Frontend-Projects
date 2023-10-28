const pickButtom = document.querySelector(".color-picker");
const colorlist = document.querySelector(".all-colors");
const pickColour = JSON.parse(localStorage.getItem("picked-color") || "[]") ;
const clearcolors = document.querySelector(".clear");


const copycolor = elem => {
    navigator.clipboard.writeText(elem.dataset.color);
    elem.innerText = "Copied";
    setTimeout(() => elem.innerText = elem.dataset.color, 1000);
}

const showcolor = () => {
    if(!pickColour.length) return; // if there are no choosen color hide the picked color section
    
    colorlist.innerHTML = pickColour.map(color =>
        `<li class="color">
        <span class="rect" style="background: ${color}; border: 2px solid ${color == "#ffffff" ? "#ccc" : color}"></span>
        <span class="value" data-color = "${color}">${color}</span>
        </li>`
    ).join(""); //generating list for the picked color and add them into html file

    document.querySelector(".picked-color").classList.remove("hide");

      //adding the color to clipboard if anyone wants to copy this
      document.querySelectorAll(".color").forEach(li => {
        li.addEventListener("click", e => copycolor(e.currentTarget.lastElementChild));
    });
}
showcolor();
const openEyeDropper = async () => {
    try {
        //opening the eye droper and seleted the colour
        const eyeDropper = new EyeDropper();
        const {sRGBHex} = await eyeDropper.open();
        navigator.clipboard.writeText(sRGBHex);

        if(!pickColour.includes(sRGBHex)){
        pickColour.push(sRGBHex);
        localStorage.setItem("picked-color", JSON.stringify(pickColour));
        showcolor();
        }

    } catch (error) {
        console.log(error)
    }
}

//clearing the all color and update the local storage and hide the picked color section

function clearAllColor(){
    pickColour.length = 0;
    localStorage.setItem("picked-color", JSON.stringify(pickColour));
    document.querySelector(".picked-color").classList.add("hide");
}
pickButtom.addEventListener("click", openEyeDropper);
clearcolors.addEventListener("click", clearAllColor);
