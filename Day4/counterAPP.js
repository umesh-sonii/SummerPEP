let count = 0;

function updateDisplay() {
    document.getElementById("counter").innerText = count;
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}