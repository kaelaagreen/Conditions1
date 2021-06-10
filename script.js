let desiredTemp = "67"
let actualTemp = "90"

if (actualTemp > desiredTemp){
console.log("Run A/C")

} else if (actualTemp < desiredTemp) {

console.log("Run heat")

} else if (actualTemp == desiredTemp){

console.log ("Standby")

}

var tempCelcius = 30
var targetUnit = "F"

switch(targetUnit){
    case "F":
        console.log(tempCelcius + " is " + (32+(tempCelcius*1.8)) + " in Farenheit");
        break;
    case "K":
        console.log(tempCelcius + " is " + (tempCelcius+273.15) + " in Kelvin");
        break;
    case "C":
        console.log("It's already in Celcius.");
        break;      
}

