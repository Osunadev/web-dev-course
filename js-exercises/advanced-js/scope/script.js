//  MANAGING SCOPES 

// Root Scope (window)
var fun = 5;

/*  Every one of these functions will be added to the Window object (parent)
    so at the end they will be methods from the Window object */

function funFunction() {
    // child scope
    var fun = "hello";
    console.log(fun);
}

function funerFunction() {
    // child scope
    var fun = "Bye";
    console.log(2, fun);
}

function funestFunction() {
    // child scope
    fun = "AHHHH";
    console.log(3, fun);
}

console.log("window", fun);