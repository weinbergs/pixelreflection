

function getData(){
	var parsedUrl = new URL(window.location.href);


	var xhttp;
	var imgSource= parsedUrl.searchParams.get("bucket");

	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			draw(this,  imgSource);
		}
	};
	xhttp.open("GET", imgSource, true);
	xhttp.send();	
}

function draw( xml,  imgSource){
    var x, i,  xmlDoc; 
    xmlDoc = xml.responseXML;

    x = xmlDoc.getElementsByTagName("Key");
		
	var content = "";
	var items = new Array();
  for (i = 0; i < x.length; i++) { 
		if (i==0){
				content += "<img id=\""+i+"\" style=\"width:200px;\" src=\""+imgSource+"\\"+x[i].childNodes[0].nodeValue + "\">";
			}else{
				content += "<img id=\""+i+"\" style=\"display:none;width:200px;\" src=\""+imgSource+"\\"+x[i].childNodes[0].nodeValue + "\">";
		}
		
    }
	//alert (content);
	document.getElementById('currentImage').innerHTML += content;	
	var current =0;
	var next = current+1;
	var max = x.length;
	document.getElementById('previous').innerHTML = "";
	document.getElementById('next').innerHTML = "<div onclick=\"next("+current+","+max+");\" style=\"font-Size:40px;width:100px;height:300px; vertical-align: middle;\">></div>";
}

function next(current, max){
	var previous = current;
	document.getElementById(current).style.display = "none";


	current =current +1;
	document.getElementById(current).style.display = "block";

	document.getElementById('previous').innerHTML = "<div onclick='previous("+current+","+max+");' style='font-Size:40px;width:100px;height:300px; vertical-align: middle;'><</div>";

	if (current != (max-1)){
		var next = current+1;
		document.getElementById('next').innerHTML = "<div onclick=\"next("+current+","+max+");\" style=\"font-Size:40px;width:100px;height:300px; vertical-align: middle;\">></div>";
	} else {
		document.getElementById('next').innerHTML = "";
	}
}


function previous(current, max){
	
	var next = current;
	document.getElementById(current).style.display = "none";

	current =current -1;
	document.getElementById('next').innerHTML = "<div onclick=\"next("+current+","+max+");\" style=\"font-Size:40px;width:100px;height:300px; vertical-align: middle;\">></div>";

	document.getElementById(current).style.display = "block";
	if (current != 0){
		var previous = current-1;
		document.getElementById('previous').innerHTML = "<div onclick='previous("+current+","+max+");' style='font-Size:40px;width:100px;height:300px; vertical-align: middle;'><</div>";
	}else {
		document.getElementById('previous').innerHTML = "";
	}
}
