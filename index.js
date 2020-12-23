const noOfDrums = document.querySelectorAll(".drum").length;

//creating sound from clicking on buttons on the page
for(let i=0; i<noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

       buttonAnimation(buttonInnerHTML);

    });
}

// creating sound through keyboard
document.addEventListener("keypress",function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
});

// Sound Function with respect to particular input
function makeSound(key){
    switch(key){
        case "w":
            const audio1 = new Audio("sounds/tom-1.mp3");
            // noinspection JSIgnoredPromiseFromCall
            audio1.play();
            break;
        case "a":
            const audio2 = new Audio("sounds/tom-2.mp3");
            // noinspection JSIgnoredPromiseFromCall
            audio2.play();
            break;
        case "s":
            const audio3 = new Audio("sounds/tom-3.mp3");
            // noinspection JSIgnoredPromiseFromCall
            audio3.play();
            break;
        case "d":
            const audio4 = new Audio("sounds/tom-1.mp3");
            // noinspection JSIgnoredPromiseFromCall
            audio4.play();
            break;
        case "j":
            const audio5 = new Audio("sounds/snare.mp3");
            // noinspection JSIgnoredPromiseFromCall
            audio5.play();
            break;
        case "k":
            const audio6 = new Audio("sounds/crash.mp3");
            // noinspection JSIgnoredPromiseFromCall
            audio6.play();
            break;
        case "l":
            const audio7 = new Audio("sounds/kick-bass.mp3");
            // noinspection JSIgnoredPromiseFromCall
            audio7.play();
            break;
        default:
            console.log("Error");
    }
}


//Button Animation function
function buttonAnimation(currentEvent){
    const activeButton = document.querySelector("." + currentEvent);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}