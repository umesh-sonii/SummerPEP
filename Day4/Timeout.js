setTimeout(( ) => {
    document.getElementById("heading1").textContent = "Heading 1 changed";

    setTimeout(() => {
        document.getElementById("heading2").textContent = "Heading 2 changed";
    },2000);
},2000);