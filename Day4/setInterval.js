setInterval(() => {
    document.getElementById("heading1").textContent="Heading1 changing";

    setInterval(() => {
        document.getElementById("heading2").textContent="heading2 changing";
    },2000);
},2000);