function sum(x,y){
    return x+y;
}
let sumArrow = (x,y) => x+y;
function random(){
    return Math.random();
}
let randomArrow = () => Math.random();
function isNegative(x){
    return x<0;
}
let isNegativeArrow = (x) => x<0;
document.getElementById("rootJS").addEventListener('click',function(){
    console.log('click rootJS');
})
document.getElementById("rootHTML").addEventListener('click',() => console.log('click HTML'));
console.log(sum(1,2));
// considerable difference is observed for this keyword, when normal functions are invoked this refers to the scope where function was invoked(essentially changing the scope of this all the time depending on where the function is invoked)
// Whereas for arrow functions this means things inside the arrow function.
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    printNameNormalFunction(){
        setTimeout(function(){
            console.log("normalfnName>",this.name);
            console.log("normalFnAge",this.age);
            console.log('normalThis',this);
        },1000);
    }
    printNameArrowFunction(){
        setTimeout(()=>{
            console.log("arrowFnName>",this.name);
            console.log("arrowAge",this.age);
            console.log('arrowThis',this);
        },1000);
    }
}
// If below 2 declarations of name,age are removed then normal function wouldn't print anything, it still wouldn't print the name since let is used which isn't stored in global scope.
let name ="ram";
var age = "3000";
// let nameCaller = new Person("Kashish",25);
// nameCaller.printNameNormalFunction();
// nameCaller.printNameArrowFunction();
// console.log(this.name);
// console.log(age);
var obj = {
    fn: function(){
        console.log('gn',this);
    },
    fn1: ()=>{
        console.log('gn1',this);
    }
};
// obj.fn(); // obj
// obj.fn1(); // window

let title = {
    firstName:"Kashish",
    lastName: "Singh",
    printFullName: function(){
        console.log(this.firstName+"    "+this.lastName);
    }
}
title.printFullName();