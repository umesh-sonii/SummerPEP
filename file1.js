var studentAge = 20;
console.log("Student age is :" , studentAge);

if (studentAge > 18) {
    console.log("Yes");
} else {
    console.log("No");
}


if (studentAge%2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


var i = 0;
while (i<5){
    console.log(i);
    i++
}

//create array
let arr = ["Apple" , 1 , "Mango" , 2 , "Banana" , 3];
console.log(arr);
console.log(arr[2]);


//create object
var object = {
    name : "Umesh Soni",
    age : 20,
    isStudent : true
}
console.log(object);
console.log(object.name);
object.course = "B.Tech";
console.log(object.course);


//functions
function fun(){
    //console.log(studentAge);
    let studentAge=21;
    console.log(studentAge);
}
fun();


//arrorw functios - shorter way to write fuctions
const add = (a,b) => a+b;
console.log(add(5, 10));


//string
var str = "Umesh Soni";
console.log(str);
console.log(str.length);
console.log(str.toUpperCase());

var name1  = "   Umesh   Soni   ";
console.log(name1.trim()); // removes whitespace from both ends
console.log(name1.trimStart()); // removes whitespace from the start
console.log(name1.trimEnd()); // removes whitespace from the end
console.log(name1.replace(/\s+/g,"")); // removes all whitespace

// var i=0;
// while(name1.length){
//     if(name1[i] == " "){
//         console.log("Space found at index: " + i);
//     }
//     i++;
// }

var digi = "7";
console.log(digi.padStart(4,"0"));

