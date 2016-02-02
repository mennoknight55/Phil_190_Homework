document.write("This is some content <br><br>");
var yourname = prompt("What is your name?");
if(yourname != null) {
	document.write("Hello " + yourname + "<br>");
}
else {
	document.write("Please enter a name next time");
}
if (2<100) {
	document.write("two is less than 100 <br>");
}
else {
	document.write("two is greater than or equal to 100 <br>")
}

var array = ["Pancakes", "Waffles", "French toast"];
var length = array.length - 1;
console.log(length);
for (var i = array.length - 1; i >= 0; i--) {
	document.write(yum(array[i]));
};
var stringstyled = "This string is now ";
document.write(stringstyled.big() + "big <br />");
document.write(stringstyled.fontcolor("blue") + "blue <br />");
document.write(stringstyled.italics() + "in italics <br />");

function yum(breakfast_type) {
	return breakfast_type + " (yum) <br> ";
}

var Danny = {
name : "Daniel Hiebert",
id : 100140954,
username : "Mennoknight55",
};
console.log(Danny);

document.write("6 + 7 = " + 6 + 7, "<br>");
document.write("6 + 7 = ", 6 + 7, "<br>");

document.write("A random number between 1 and 5 = ", Math.floor((Math.random()) * 5) + 1)
document.write("<br><br>");
document.write("\"10\" == 10 is ", ("10" == 10), "<br>");
document.write("\"10\" === 10 is ", ("10" === 10), "<br>");

