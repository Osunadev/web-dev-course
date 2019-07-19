//  Ternary operator -> condition ? expr1 if conditon true : expr2 if condition false

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : "not availale");

// Switch statement -> switch(value) { cases }
function moveCommand(direction) {
    var whatHappens;

    switch (direction) {
        case "forward":
            whatHappens = "you enconter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction"
            break;
    }

    return whatHappens;
}