window.onload = function () {
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hello jfl!");
	para.appendChild(txt);
}