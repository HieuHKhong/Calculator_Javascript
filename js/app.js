// Display
let display = document.getElementById("display")


// Clear button
let clearBtn = document.getElementById("clear")

// Empty input box
function clearInput(){
    display.value = "";
    first = 0;
    second = 0;
    operand = '';
}

clearBtn.addEventListener("click", clearInput);

// Getletting Number buttons from html and Displaying
 num1 = document.getElementById("num1")

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

// Storing values based on operand clicked

let first = 0;
let operand = '';
let second = 0;
let result = 0;

let addition = document.getElementById("add");

addition.addEventListener("click", function adding(){
    first = display.value;
    display.value = "";
    operand = '+';
    
})

subtraction = document.getElementById("sub");

subtraction.addEventListener("click", function subbtn(){
    first = display.value;
    display.value = "";
    operand = '-'
})

multipication = document.getElementById("multi");

multipication.addEventListener("click", function multip(){
    first = display.value;
    display.value = "";
    operand = '*'
})

division = document.getElementById("divide");

division.addEventListener("click", function dividebtn(){
    first = display.value;
    display.value = "";
    operand = '/'
})


percent = document.getElementById("percentage")

percent.addEventListener("click", function perc(){
    display.value *= +.01;

})

changesigns = document.getElementById("signs");

changesigns.addEventListener("click", function change(){
    display.value *= -1;
})


let decimal = document.getElementById("decimal");

decimal.addEventListener("click", function decimalbtn(){
    display.value += '.';
})






// Stores the second value and displays result after "=" is clicked
let equalto = document.getElementById("equal");

equalto.addEventListener("click", function equalbtn(){
    if(true && operand === '+'){
        second = display.value;
        display.value = "";
        result = +first + +second;
        display.value += result;
        first = result;
    }else if(true && operand === '-'){
        second = display.value;
        display.value = "";
        result = +first - +second;
        display.value += result;
        first = result;
    }else if(true && operand === '*'){
        second = display.value;
        display.value = "";
        result = (first * second)
        display.value += result;
        first = result;
    }else if(true && operand === '/'){
        second = display.value;
        display.value = "";
        result = (first / second)
        display.value += result;
        first = result;
    }
})





