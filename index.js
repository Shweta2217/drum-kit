function makeSound(value) {
    switch (value) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log("innerTEXT");
            break;
    }
}

function buttonAnimation(val) {
    var activeButton = document.querySelector("." + val);
    console.log(activeButton);
    activeButton.classList.add("pressed");
    setTimeout(a, 700);

    function a() {
        activeButton.classList.remove("pressed");
    }
}


// ----------------------Detecting-ButtonPress--------------------

for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var innerTEXT = this.innerText;
        makeSound(innerTEXT);
        buttonAnimation(innerTEXT);

    });
}
// ----------------------Detecting-KeyPress--------------------

document.addEventListener("keypress", function(event) {
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);

});