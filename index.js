//detecting button press
for(var i = 0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clickHandler);
    function clickHandler(){
        var buttonInnerHTML = this.innerHTML;
        soundMaker(buttonInnerHTML);//function to play sound
        animatedButton(buttonInnerHTML);//function to add the animation
    }
}
//detecting key press
//the switch section will work for the key press and also for the buttons 
document.addEventListener("keydown", keyHandler);// added to the whole document
function keyHandler(event){
    soundMaker(event.key);//tells which keyboard key was pressed
    animatedButton(event.key);//pasing the parameter to the animation function 
}
//function to play the sound on key detection
function soundMaker(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            break;
    }
}
//function for animated buttons
function animatedButton(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
    

}