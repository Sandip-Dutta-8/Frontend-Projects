var NoofDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < NoofDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", drumsound);
}
function drumsound() {
    var ButtonInnerHTML = this.innerHTML;
    makesound(ButtonInnerHTML);
    makeanimation(ButtonInnerHTML);
}

document.addEventListener("keydown", function(event){
        makesound(event.key);
        makeanimation(event.key);
});

function makesound(key){
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function makeanimation(currentkey){
    var buttonpressed = document.querySelector("."+currentkey);
    buttonpressed.classList.add("pressed");
    setTimeout(function(){
        buttonpressed.classList.remove("pressed");
    },100);
}
