
function draw(){
	var parsedUrl = new URL(window.location.href);

	
	var size= parsedUrl.searchParams.get("size") ;
	size = size || 12;
	var workingSize = Math.ceil(size/2);
	var isOdd = size%2;
	var totalPixels = size*size;

	document.getElementById('canvas').style.width = 20*size+"px";
	document.getElementById('canvas').style.height = 20*size+"px";
	document.getElementById('column2').style.width = 20*size+"px";
	document.getElementById('wrapper').style.width = 20*size+90+380+"px";
	document.getElementById('curColor').style.width = 20*size+30+"px";	


	var maple 	= "#F5EDC0";
	var ipe 	= "#614420";
	var cherry 	= "#964e37";
	var heartwood = "#E3C080";
	var elm 	= "#936f2c";


	for (i = 1; i<totalPixels+1; i++){
		if (i%size <= workingSize){
			document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div id='"+i+"' class='block'  onclick='color("+i+","+isOdd+","+size+");'></div>"}
		else {
			document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div id='"+i+"' class='block' ></div>"}
		
	}

	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"  <div  class=color'   style=\"background-color:"+maple+";width: 30px;  height: 30px;\" onclick=\"setColor('"+maple+"');\"></div>"  ;
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+heartwood+";width: 30px;  height: 30px;\" onclick=\"setColor('"+heartwood+"');\"  ></div>  ";
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+elm+";width: 30px;  height: 30px;\"  onclick=\"setColor('"+elm+"');\" ></div>  ";
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+cherry+";width: 30px;  height: 30px;\"  onclick=\"setColor('"+cherry+"');\" ></div>  ";
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+ipe+";width: 30px;  height: 30px;\"  onclick=\"setColor('"+ipe+"');\" ></div>"; 

	}

 
function color(x, isOdd, size) {
	
    document.getElementById(x).style.background = document.getElementById("currentColor").value;
	var y = x+ size +1;
	var z = 2*(x%size);
	var a = y-z;

	if (isOdd == 1 && (a-x)==1) {}
	else{
		document.getElementById(a).style.background = document.getElementById("currentColor").value;}
		}

function setColor(strColor) {
	document.getElementById("currentColor").value= strColor;
	document.getElementById("curColor").style.background = strColor;
	
}	

