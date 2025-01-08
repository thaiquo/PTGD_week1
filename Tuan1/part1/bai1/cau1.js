var weightMark= 78;
var heightMark=1.88;
var BMIMark=(weightMark/(heightMark*heightMark));
console.log("BMIMark: ", BMIMark);

var weightJohn= 85;
var heightJohn=1.76;
var BMIJohn=(weightJohn/(heightJohn*heightJohn));
console.log("BMIJohn: ", BMIJohn);


ds=BMIMark>BMIJohn;
console.log("BMIMark lon hon John la: ", ds);