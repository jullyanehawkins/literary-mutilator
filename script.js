function changeTextColor() {
	document.getElementById("one").style.color = "green";
}

function changeTextFont() {
	document.getElementById("two").style.fontFamily = "Arial";
}

function findAndReplace () {
	var str = document.getElementById("three").innerHTML;
	var res = str.replace("Olinda", "THE MOST BEAUTIFUL CITY IN THE WORLD");
	document.getElementById("three").innerHTML = res;
}

function highlight() {
	document.getElementById("oh").style.backgroundColor = "#FFFF00";
}