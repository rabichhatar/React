for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//console.log("Value of i after for loop is, ",i);
const c=600;
console.log(c);
//c=90;

//Anonymous Function
let m = function(){
    return "Wells Fargo";
}
console.log(m);
console.log(m());

//Arrow Function (ES6)
let p = () => "Wells Fargo";
console.log(p);
console.log(p());

//Arrow function with agrumemt msg and return msg
let g = msg => msg;
console.log(g(30));
console.log(g("WF"));
console.log(g(true));

//Arrow function with functionality
let add = (a,b) => { let res=a+b; return res;}
console.log(add(10,20));

function chnage() {
    let d = document.getElementById("h");
    let v = d.getAttribute("reply");
    d.innerHTML=v;
}