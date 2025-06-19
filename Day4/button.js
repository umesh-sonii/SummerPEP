const button = document.createElement("button");

button.innerHTML = "click me";

button.onclick = function() {
    alert("Button Clicked");
};

document.getElementById("container").appendChild(button);