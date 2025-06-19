console.log(1);
setTimeout(() => {
    console.log(2);

    setTimeout(() => {
        console.log(3);
    },2000);
},2000);