const buttonValues = [
    "-/+", "√", "%", "AC",
    "1", "2", "3", "÷",
    "4", "5", "6", "x",
    "7", "8", "9", "-",
    "0", ".", "=", "+"
];

const operations = ["+", "-", "x", "÷", "="];
const topMenu = ["-/+", "√", "%", "AC"]
let A = 0;
let B = null;
let operator = null;

function clearAll() {
    A = 0;
    B = null;
    operator = null;
}

const clear = "AC";

const display = document.getElementById("display");

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
    document.getElementById("buttons").appendChild(button);

    if (operations.includes(value)) {
        button.style.backgroundColor = "rgba(0, 72, 136, 0.20)";

    }

    if (clear.includes(value)) {
        button.style.backgroundColor = "rgba(85, 0, 136, 0.15)";
    }

    button.addEventListener("click", function() {
        if (operations.includes(value)) {
            if (value == "=") {
                if (A != null) {
                    B = display.value;
                    numA = Number(A);
                    numB = Number(B);
                }

                if (operator == "÷") {
                    display.value = numA/numB;
                    if (numB == 0) {
                        display.value = "undefined";
                    }
                }
                else if (operator == "x") {
                    display.value = numA * numB;
                }
                else if (operator == "+") {
                    display.value = numA + numB;
                }
                else if (operator == "-") {
                    display.value = numA - numB;
                }
            }
            else {
                operator = value;
                A = display.value;
                display.value = "";
            }
        }
        else if (topMenu.includes(value)) {
            if (value == "√") {
                display.value = Number(display.value) ** 0.5;
            }
            else if (value == "%") {
                display.value = Number(display.value)/100;
            }
            else if (value == "AC") {
                clearAll();
                display.value = "";
            }
            else if (value == "-/+") {
                if (display.value != "0" && display.value != "") {
                    display.value = Number(display.value) * -1;
                }
            }
        }
        else {
            if (value == ".") {
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            }
            else if (display.value == "0") {
                display.value = value;
            }
            else {
                display.value += value;
            }
        }
    });
};