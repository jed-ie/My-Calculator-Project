const buttons = document.querySelector('.buttons');
const display = document.querySelector('#display-text');
let _1st_value = 0;
let _2nd_value = 0;
let _operator = "";

// function to check if value is a number or not
function isNumber(n) {
    let new_value = Number(n);
    let return_value = false;
    let pos = display.innerHTML.indexOf("."); 

    if (!isNaN(new_value)) {
        return_value = true;
    }

    // to check if the value is a decimal point and to allow it to be added to the display
    if (n == ".") {
        return_value = true;
    }

    // to check if the value is a decimal point and to prevent it from being added to the display if there is already a decimal point in the display
    if(pos >=0 && n == "."){
        return_value = false;
    }

    return return_value;
}
// to listen for any click event on the buttons container and log the inner text of the clicked button
buttons.addEventListener("click",function(e){

    // to detect if what was clicked is a number or not
    let cap_value = e.target.innerText;

    // Convert display symbols to JavaScript operators
    if (cap_value === "×") {
        cap_value = "*";
    }

    if (cap_value === "÷") {
        cap_value = "/";
    }

    // for numbers
    if(isNumber(cap_value)){
        // to change the diplay from 0 to the number clicked, and to append the number clicked to the display if the display is not 0
        if(display.innerText == "0"){
            display.innerText = "";
        }
        // In preparation to capture  second value
        if(_operator != "" && display.innerText == _1st_value){
            display.innerText = "";
        }
        display.innerText = display.innerText + cap_value;
    }

    // for A/C button
    switch (cap_value) {
        case "AC":
            clearCalc()
        break;

        case "+":
        case "-":
        case "*":
        case "/":
        // case "%":
            setFirstValue();
            setOperator(cap_value) ;
        break;
        
        case "%":
            display.innerText = Number(display.innerText) / 100;
        break;

        case "+/-":
            display.innerText = Number(display.innerText) * -1;
        break;

        case "=":
            evaluate();
        break; 
        default:
        break;
    }
});

function evaluate(){
    _2nd_value = display.innerText;
    let atri = _1st_value + _operator + _2nd_value;

    display.innerText = eval(atri);
}

function setFirstValue(){
    _1st_value = display.innerText;
} 

function setOperator(opt) {
    _operator = opt;
} 
function clearCalc(){
    display.innerText = "0";
}