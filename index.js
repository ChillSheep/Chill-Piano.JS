/*
q=c
2=c#
w=d
3=d#
e=e
r=f
5=f#
t=g
6=g#
y=a
7=a#
u=b
*/
var numberOfButtons = document.querySelectorAll(".pianoButton").length;
//Initialize sounds
var q = new Audio("sounds/q.mp3");
var two = new Audio("sounds/2.mp3");
var w = new Audio("sounds/w.mp3");
var three = new Audio("sounds/3.mp3");
var e = new Audio("sounds/e.mp3");
var r = new Audio("sounds/r.mp3");
var five = new Audio("sounds/5.mp3");
var t = new Audio("sounds/t.mp3");
var six = new Audio("sounds/6.mp3");
var y = new Audio("sounds/y.mp3");
var seven = new Audio("sounds/7.mp3");
var u = new Audio("sounds/u.mp3");
var i = new Audio("sounds/i.mp3");

for (var foo=0; foo<numberOfButtons; foo++)
{
    document.querySelectorAll("button")[foo].addEventListener("click", function () {
        var btn = this.innerHTML;
        playSound(btn.toLocaleLowerCase());
        animate(btn.toLocaleLowerCase());
    });
}

document.addEventListener("keypress", function(event) {
    playSound(event.key.toLocaleLowerCase());
    animate(event.key);
})

function playSound(key) {
    
    switch (key) {
        case "q":
            q.currentTime = 0;
            q.play();
            break;
        case "2":
            two.currentTime = 0;
            two.play();
            break;
        case "w":
            w.currentTime = 0;
            w.play();
            break;
        case "3":
            three.currentTime = 0;
            three.play()
            break;
        case "e":
            e.currentTime = 0;
            e.play();
            break;
        case "r":
            r.currentTime = 0;
            r.play();
            break;
        case "5":
            five.currentTime = 0;
            five.play();
            break;
        case "t":
            t.currentTime = 0;
            t.play();
            break;
        case "6":
            six.currentTime = 0;
            six.play();
            break;
        case "y":
            y.currentTime = 0;
            y.play();
            break;
        case "7":
            seven.currentTime = 0;
            seven.play();
            break;
        case "u":
            u.currentTime = 0;
            u.play();
            break;
        case "i":
            i.currentTime = 0;
            i.play();
            break;
    }
}

function animate(currentKey) {
    var activeBtn;
    if (isNumber(currentKey)==false) {
       currentKey = "." + currentKey;
    }
    else {
        switch (currentKey) {
            case "2":
                currentKey = ".two";
                break;
            case "3":
                currentKey = ".three";
                break;
            case "5":
                currentKey = ".five";
                break;
            case "6":
                currentKey = ".six";
                break;
            case "7":
                currentKey = ".seven";
                break;
        }
        
    }
    activeBtn = document.querySelector(currentKey);
    activeBtn.classList.add("pressed");
    
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100)

}

var numbers = ["2", "3", "5", "6", "7"];

function isNumber(toTest) {
    if (numbers.includes(toTest))
                return true;
    return false;
}