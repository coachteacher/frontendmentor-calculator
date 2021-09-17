window.onload = function(){

    //theme selector
    const root = document.querySelector(':root');
    const themeSlider = document.getElementById('skin-selector');

    function themeSelect(value){
        if(themeSlider.value == 1){
            root.style.setProperty('--font-color', '#35352c');
            root.style.setProperty('--display-background-color', '#ededed');
            root.style.setProperty('--keypad-background-color', '#d1cccc');
            root.style.setProperty('--special-operations-background-color', '#377f86');
            root.style.setProperty('--special-operations-border-color', '#1b5f65');
            root.style.setProperty('--special-operations-font-color', 'white');
            root.style.setProperty('--equal-sign-background-color', '#ca5502');
            root.style.setProperty('--equal-sign-border-color',  '#893901');
            root.style.setProperty('--equal-sign-font-color', 'white');
            root.style.setProperty('--background-color', '#e6e6e6');
            root.style.setProperty('--button-bottom-color', '#a69d91');
            root.style.setProperty('--button-color', '#e5e4e1');
            root.style.setProperty('--button-font-color', '#444b5a');
        }else if(themeSlider.value == 2){
            root.style.setProperty('--font-color', '#ffe53d');
            root.style.setProperty('--display-background-color', '#1d0934');
            root.style.setProperty('--keypad-background-color', '#1d0934');
            root.style.setProperty('--special-operations-background-color', ' #58077d');
            root.style.setProperty('--special-operations-border-color', '#bc15f4');
            root.style.setProperty('--special-operations-font-color', 'white');
            root.style.setProperty('--equal-sign-background-color', '#00e0d1');
            root.style.setProperty('--equal-sign-border-color',  '#6cf9f2');
            root.style.setProperty('--equal-sign-font-color', '#1b2428');
            root.style.setProperty('--background-color', '#160628');
            root.style.setProperty('--button-bottom-color', '#871c9c');
            root.style.setProperty('--button-color',  '#341c4f');
            root.style.setProperty('--button-font-color', '#ffe53d');
        }else{
            root.style.setProperty('--font-color', 'white');
            root.style.setProperty('--display-background-color', '#182034');
            root.style.setProperty('--keypad-background-color', '#232c43');
            root.style.setProperty('--special-operations-background-color', '#637097');
            root.style.setProperty('--special-operations-border-color', '#404e72');
            root.style.setProperty('--special-operations-font-color', 'white');
            root.style.setProperty('--equal-sign-background-color', '#d03f2f');
            root.style.setProperty('--equal-sign-border-color',  '#93261a');
            root.style.setProperty('--equal-sign-font-color', 'white');
            root.style.setProperty('--background-color', '#3a4764');
            root.style.setProperty('--button-bottom-color', '#b4a597');
            root.style.setProperty('--button-color', '#eae3dc');
            root.style.setProperty('--button-font-color', '#444b5a');
        }
    };
    //event listeners for theme change
        themeSlider.addEventListener('mousemove', themeSelect);
        themeSlider.addEventListener('change', themeSelect);

const digits = document.querySelectorAll('.digit');
const display = document.querySelector('number-output');
const operation = document.querySelectorAll('.operation');
const del = document.querySelector('.delete');
const reset = document.querySelector('.reset');
const equals = document.querySelector('.equals');
let statement = [];

/*
function appendNumber(e){
    number = e.target.value;
    if(display.value === '0' && number === '0'){
        display.innerText = '0';
    }else if(display.value === '0' && number === '.'){
        display.innerText = '0.';
    }else{
        display.innerText += number; 
    }
}

function captureMath(e){
    operator = e.target.value;
    if( )
}

digits.forEach(digt => {
    btn.addEventListener('click', appendNumber);
})

operation.forEach(btn => {
    btn.addEventListener('click', captureMath)
})


function handleClickBtn(value){
    if(isNaN(+value)){
        handleOperators(value);
        previousOperator = value;
    }else{
        handleNumber(value);
    }
    display.innterText = buffer != '0' ? buffer : tracker;
}

function handleOperators(symbol){
    if(symbol === 'RESET'){
        buffer = '0';
        tracker = 0;
    }else if(symbol === 'DEL'){
        buffer = buffer.substring(0, buffer.length - 1);
    }else if(symbol === '+' || symbol === '=' || symbol === 'x' || symbol === '/'){
        handleMath(previousOperator);
    }
}

function handleNumber(numberStr){
    if(buffer === '0'){
        buffer = numberStr;
    }else{
        buffer += numberStr;
    }
}

function handleMath(symbol){
    let integerBuffer = +buffer;
    if(buffer === '0'){
        return;
    }
    if(tracker === 0){
        tracker = integerBuffer;
    }else{
        alterOperator(integerBuffer);
    }
    buffer = '0';
}

function alterOperator(int){
    if(previousOperator === '+'){
        tracker += int;
    }else if(previousOperator === '-'){
        tracker -= int;
    }else if(previousOperator === '/'){
        tracker /= int;
    }else if(previousOperator === 'x'){
        tracker *= int;
    }
}

function main(value){
    handleClickBtn(value);
}



const screenOutput = document.getElementById('number-output');
let screenNum = screenOutput.innerText;
let resultArr = [];
let result = 0;
const del = document.querySelector('.delete');

del.addEventListener('click', () => {
    if(screenNum !=0){
        let temp = screenNum.toString();
            if(temp.length == 1){
                screenNum = 0;
            }
    }
})
*/

};