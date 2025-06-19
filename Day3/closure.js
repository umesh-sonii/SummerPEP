function parentFunc() {
    const variable = 49;

    return function childFunc() {
        console.log("I'm child function");
        console.log(variable);
    }
}

const val = parentFunc();

val();