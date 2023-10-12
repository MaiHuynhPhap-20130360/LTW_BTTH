var a = 1;
var b = -5;
var c = 6;


var delta = b * b - 4 * a * c;


var info = "";


if (delta < 0) {

    info = "Phương trình " + a + "x^2 + " + b + "x + " + c + " = 0 vô nghiệm.";
} else if (delta == 0) {

    var x = -b / (2 * a);
    info = "Phương trình " + a + "x^2 + " + b + "x + " + c + " = 0 có nghiệm kép x = " + x + ".";
} else {

    var x1 = (-b - Math.sqrt(delta)) / (2 * a);
    var x2 = (-b + Math.sqrt(delta)) / (2 * a);
    info = "Phương trình " + a + "x^2 + " + b + "x + " + c + " = 0 có hai nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2 + ".";
}


document.write(info);