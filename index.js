//CALCULATOR FUNCTIONALITY

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);

        // Limit the result length to fit the display
        const maxLength = 10;
        if (result.toString().length > maxLength) {
            if (result < 0) {
                result = Number(result.toFixed(maxLength - 2)); 
            }
             else
            {
                result = Number(result.toFixed(maxLength - 1));
            }
        }

        display.value = result;
    } catch (error) 
    {
        display.value = "Error";
    }
}
