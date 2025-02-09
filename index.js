function add(){
    let a= +document.getElementById("num1").value;
    let b= +document.getElementById("num2").value;
    let sum= a+b;
   document.getElementById("result").innerHTML = `add of A: ${a} and B: ${b} = ${sum}`;

}
function sub(){
    let a= +document.getElementById("num1").value;
    let b= +document.getElementById("num2").value;
   let sum= a-b;
   document.getElementById("result").innerHTML = `Sub of A: ${a} and B: ${b} = ${sum}`;

}
function mul(){
    let a= +document.getElementById("num1").value;
    let b= +document.getElementById("num2").value;
   let sum= a*b;
   document.getElementById("result").innerHTML = `mul of A: ${a} and B: ${b} = ${sum}`;

}
function div(){
    let a= +document.getElementById("num1").value;
    let b= +document.getElementById("num2").value;
   let sum= a/b;
   document.getElementById("result").innerHTML = `div of A: ${a} and B: ${b} = ${sum}`;

}

