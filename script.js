const buttonValues = [
    "-/+", "√", "%", "AC",
    "1", "2", "3", "÷",
    "4", "5", "6", "x",
    "7", "8", "9", "-",
    "0", ".", "=", "+"
];

const operations = ["+", "-", "x", "÷"];

const clear = "AC";

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
    document.getElementById("buttons").appendChild(button);

    if (operations.includes(value)) {
        button.style.backgroundColor = "rgba(0, 72, 136, 0.20)";

    };

    if (clear.includes(value)) {
        button.style.backgroundColor = "rgba(85, 0, 136, 0.15)";
    }
};