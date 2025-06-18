function func2()
{
    console.log(2);
}
function func1(callback)
{
    console.log(1);
    callback();
    console.log(3);
}
func1(func2);



//===============================================

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Umesh", sayBye);


//===============================================


function hey(name , callback){
    console.log("Hello " + name);
    callback();
}
function bye(){
    console.log("Byee Byee");
}
hey("Umesh" , bye);