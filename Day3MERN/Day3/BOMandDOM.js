const person = {
    firstname: "Umesh",
    lastname: "Soni",
    printName: function() {
        console.log(this.firstname + " " + this.lastname);
    },
    marks: {
        english: 80,
        hindi: 60
    }
};
const heading = document.getElementById("heading");

heading.textContent = "This is my heading";