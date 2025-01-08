var weightMark= 95;
var heightMark=1.88;
var BMIMark=(weightMark/(heightMark*heightMark));
console.log("BMIMark: ", parseFloat(BMIMark.toFixed(1)));

var weightJohn= 85;
var heightJohn=1.76;
var BMIJohn=(weightJohn/(heightJohn*heightJohn));
console.log("BMIJohn: ", parseFloat(BMIJohn.toFixed(1)));


ds=BMIMark>BMIJohn;
if(ds== false)
    console.log("BMI Mark thấp hơn John");
else
console.log("BMI Mark lớn hơn John");