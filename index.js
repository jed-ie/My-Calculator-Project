const buttons = document.querySelector('.buttons');
const display = document.querySelector('#display-text');

// function to check if value is a number or not
function isNumber(n){
    // at first, we need to convert the variable from string to number
    let new_value = Number(n);
    // then we need to check if the new value is a number or not
    if(isNaN(new_value)){
        return false;
    }else{
        return true;
    }
}
// to listen for any click event on the buttons container and log the inner text of the clicked button
buttons.addEventListener("click",function(e){

    // to detect if what was clicked is a number or not
    let cap_value = e.target.innerText;

    // we need to detect if its a number, and if its  number, then it should be sent to the display
    if(isNumber(cap_value)){
        display.innerHTML = cap_value;
    }
});

