const button = document.createElement("button");

button.innerHTML = "Save";

button.onclick = function() {
    alert("Saved");
};

document.getElementById("container").appendChild(button);