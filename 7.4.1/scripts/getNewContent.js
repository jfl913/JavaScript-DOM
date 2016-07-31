function getNewContent() {
	var request = getHTTPObject();
	alert(request);
	if(request) {
		request.open("GET", "example.txt", true);
		request.onreadystatechange = function(){
			if (request.readystate == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			} else {
				alert(request.responseText);
				var responseText = request.responseText;
				if (responseText.length > 0) {
					var para = document.createElement("p");
					var txt = document.createTextNode(request.responseText);
					para.appendChild(txt);
					document.getElementById('new').appendChild(para);
				};
			}
		};
		request.send(null);
	} else {
		alert('Sorry, your browser doesn\'t support XMLHttpRequest');
	}
}
addLoadEvent(getNewContent);