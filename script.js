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


//calculator functionality  
const calculator = document.querySelector('.calculator-body');
          const display = calculator.querySelector('.number-output')
          const keys = calculator.querySelectorAll('.key');
          const digits = calculator.querySelectorAll('.digit');
          const decimal = calculator.querySelector('.decimal');
          const operatorKey = calculator.querySelectorAll('.operator');
          const equals = calculator.querySelector('.equals');
          const delKey = calculator.querySelector('.delete');
          const resetKey = calculator.querySelector('.reset');
          let mathArr =[];

        function updateDisplay(e){
            const displayValue = display.innerText;
            const key = e.target;
            const keyValue = key.value;
            
                if(displayValue == '0'){
                    display.innerText = keyValue;
                    decimal.disabled = false;
                }else if(displayValue === '0' && key.classList.contains('.decimal')){
                    display.innerText = '0.' + keyValue;
                }else if(displayValue.includes('.')){
                    decimal.disabled = true;
                    display.innerText = displayValue + keyValue;
                }else{
                    display.innerText = displayValue + keyValue;
                    }
            }
        function operation(e){
            const key = e.target;
            const operator = key.innerText;
            const displayValue = display.innerText

            decimal.disabled = false;
            mathArr.push(displayValue);
            mathArr.push(operator);
            console.log(mathArr);
        }
        function reset(){
            mathArr=[];
            display.innerText = '0';
            decimal.disabled = false;
        }
        function backspace(){
            const displayValue = display.innerText;
            display.innerText = displayValue.substring(0, [displayValue.length -1]);
                if(displayValue.length == 1){
                    display.innerText = '0';
                }
        }
        function newValue(e){
            display.innerText = e.target.value;
        }
        function calculate(){
            mathArr.push(display.innerText);
            switch(mathArr[(mathArr.length -2)]){
                case '+':
                    let addition = Number(mathArr[0]) + Number(mathArr[(mathArr.length -1)]);
                    display.innerText = addition;
                    mathArr = [];
                    break;
                case '-':
                    let subtraction = Number(mathArr[0]) - Number(mathArr[(mathArr.length -1)]);
                    display.innerText = subtraction;
                    mathArr = [];
                    break;
                case 'x':
                    let multiplication = Number(mathArr[0]) * Number(mathArr[(mathArr.length -1)]);
                    display.innerText = multiplication;
                    mathArr = [];
                    break;
                case '/':
                    let division = Number(mathArr[0]) / Number(mathArr[(mathArr.length -1)]);
                    display.innerText = division;
                    mathArr = [];
                    break;
            }
            updateDisplay();
        }
        digits.forEach(button =>{
            button.addEventListener('click', updateDisplay);
        });
        
        decimal.addEventListener('click', ()=>{
            decimal.disabled = true;
        });
        operatorKey.forEach(button =>{
            button.addEventListener('click', operation);
            button.addEventListener('blur', newValue);
        });
        equals.addEventListener('blur', ()=>{
            mathArr=[];
            decimal.disabled = false;
            
        })

        resetKey.addEventListener('click', reset);
        delKey.addEventListener('click', backspace);
        equals.addEventListener('click', calculate);

        //TO DO LIST
        //create new display numbers after calculate()
        //make calculate after there are two values to math and any operator key is pressed
        //comma at char 4 when value.length >=4, comma at char 8 while value.length >=7 etc. --> but what about decimal places?
        //limt the displayValue.length to 12 or so.
};
