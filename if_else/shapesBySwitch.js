var areaofshapes = "square";
var a = 5;
var b = 10;
var result;
switch(areaofshapes){
    case "square":
    result = a * a;
    console.log(result);
    break;

    case "rectangle":
        result = a * b;
        console.log(result);
        break;

    case "circle":
        var r = 2;
        result =  3.1415 * ( r*r);
        console.log(result);
        break;

        default:
            console.log("no condition match");
}