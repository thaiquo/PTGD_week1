
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

 //BMIs
const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log("BMIMark: ", parseFloat(markBMI.toFixed(1)),"lon hon BMIJohn: ", parseFloat(johnBMI.toFixed(1)));
} else {
    console.log("BMIJohn: ", parseFloat(johnBMI.toFixed(1)),"lon hon BMIMark: ",parseFloat(markBMI.toFixed(1)) );
}

