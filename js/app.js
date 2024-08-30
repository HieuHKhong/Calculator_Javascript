// Display
let display = document.getElementById("display")


// Clear button
let clearBtn = document.getElementById("clear")

// Empty input box
function clearInput(){
    display.value = "";
}

clearBtn.addEventListener("click", clearInput);





// Getting Number buttons from html and Displaying
let num1 = document.getElementById("num1")

function btn1() {
    display.value += 1;
}

num1.addEventListener("click", btn1)

let num2 = document.getElementById("num2")

function btn2() {
    display.value += 2;
}

num2.addEventListener("click", btn2)


let num3 = document.getElementById("num3")

function btn3() {
    display.value += 3;
}

num3.addEventListener("click", btn3)


let num4 = document.getElementById("num4")

function btn4() {
    display.value += 4;
}

num4.addEventListener("click", btn4)

let num5 = document.getElementById("num5")

function btn5() {
    display.value += 5;
}

num5.addEventListener("click", btn5)


let num6 = document.getElementById("num6")

function btn6() {
    display.value += 6;
}

num6.addEventListener("click", btn6)

let num7 = document.getElementById("num7")

function btn7() {
    display.value += 7;
}

num7.addEventListener("click", btn7)

let num8 = document.getElementById("num8")

function btn8() {
    display.value += 8;
}

num8.addEventListener("click", btn8)

let num9 = document.getElementById("num9")

function btn9() {
    display.value += 9;
}

num9.addEventListener("click", btn9)

let num0 = document.getElementById("num0")

function btn0() {
    display.value += 0;
}

num0.addEventListener("click", btn0)

let num00 = document.getElementById("num00")

function btn00() {
    display.value += '00';
}

num00.addEventListener("click", btn00)

//!--- END OF NUMBERS ------------------------------------

