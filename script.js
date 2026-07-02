let display = document.getElementById("display");

function addToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event){

    let key = event.key;

    if(key === "Enter"){
        event.preventDefault();
        calculate();
        return;
    }

    if(key >= "0" && key <= "9"){
        addToDisplay(key);
    }

    if(key === "."){
        addToDisplay(".");
    }

    if(key === "+" || key === "-" || key === "*" || key === "/"){
        addToDisplay(key);
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }
});

function percentage(){
    display.value = display.value / 100;
}