
function layout(){
	colorChoices(14,26);
	draw(14,26);
}

function draw(yHeight, xWidth){
	document.getElementById('canvas').innerHTML = "";
	var totalPixels = xWidth*yHeight;
	var canvasWidth= 15*xWidth;
	document.getElementById('canvas').style.width = 15*xWidth+"px";
	document.getElementById('canvas').style.height = 30*yHeight+30+"px";
	document.getElementById('column2').style.width = 15*xWidth+"px";
	document.getElementById('wrapper').style.width = 15*xWidth+550+"px";
	document.getElementById('curColor').style.width = 15*xWidth+"px";	

	var content = "";
	for (i = 1; i<totalPixels+1; i++){
		if (i < xWidth){
			content = content +	"<div id='"+i+"' class='board'  onclick='color("+i+","+xWidth+","+yHeight+");'></div>";}
		if (i == xWidth){
			content = content +	"<div id='"+i+"' class='board'  onclick='color("+i+","+xWidth+","+yHeight+");'></div><div id=\"hr\" style=\"width:"+canvasWidth+"px;height:60px;\"><hr/></div>";
			
			content = content +	"<div id=\"boardImage\" style=\"height:"+30*(yHeight-2)+"px;width:"+15*xWidth+"px;\">";
			}
		
		if (i > xWidth) {
			content = content +	"<div id='"+i+"' class='board' ></div>";}

		
	}
	content = content +	"</div>";
	document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML + content;
	setCost(xWidth, yHeight)	
}

function colorChoices(yHeight, xWidth){
	var maple 			= "#EFE3C2";
	var osage			= "#F7E858";
	var ipe 			= "#614420";
	var cherry 			= "#A1552C";
	var heartwood 		= "#B88C51";
	var elm 			= "#936f2c";
	var purpleheart 	= "#8B3DA5";
	var paduak 			= "#C33B16";
	var cost 			=  Math.floor((xWidth/2) * (yHeight/2))
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"  <div  class=color'   style=\"background-color:"+maple+";width: 30px;  height: 30px;\" onclick=\"setColor('"+maple+"');\"></div>"  ;
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+osage+";width: 30px;  height: 30px;\" onclick=\"setColor('"+osage+"');\"  ></div>  ";
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+heartwood+";width: 30px;  height: 30px;\" onclick=\"setColor('"+heartwood+"');\"  ></div>  ";
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+elm+";width: 30px;  height: 30px;\"  onclick=\"setColor('"+elm+"');\" ></div>  ";
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+cherry+";width: 30px;  height: 30px;\"  onclick=\"setColor('"+cherry+"');\" ></div>  ";
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+ipe+";width: 30px;  height: 30px;\"  onclick=\"setColor('"+ipe+"');\" ></div>"; 
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+purpleheart+";width: 30px;  height: 30px;\"  onclick=\"setColor('"+purpleheart+"');\" ></div>"; 
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div  class=\"color\" style=\"background-color:"+paduak+";width: 30px;  height: 30px;\"  onclick=\"setColor('"+paduak+"');\" ></div>"; 
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
		"	<div  class=\"spacer\"  ></div>  <div>Cost  </div>"; 
	document.getElementById('colors').innerHTML = document.getElementById('colors').innerHTML +
"	<div  class=\"spacer\"  ></div>  <div id=\"cost\"> "+cost+" </div>"; }
 
function color(x, xWidth, yHeight) {
	
    document.getElementById(x).style.background = document.getElementById("currentColor").value;
	setCost(xWidth, yHeight);
	var a = 1;
	var z = 20;
	for (a=2; a<yHeight+1; a++){
		if (a%2!=0){
			z=(xWidth*(a-1)+xWidth-x)+1;
			document.getElementById(z).style.background = document.getElementById("currentColor").value;
		}
		else{	
			z=(xWidth*(a-1)+x);
			document.getElementById(z).style.background = document.getElementById("currentColor").value;
			
		}
	}
}

function setCost(xWidth, yHeight) {
	var strips = 1;
	var a = 1;
		

	for (a=1; a<xWidth; a++){
		if (document.getElementById(a).style.background != document.getElementById(a+1).style.background) {
		strips = strips+1;}
	document.getElementById('cost').innerHTML = Math.floor((xWidth/2) * (yHeight/2)+ (strips/5)*10); 
	}
}

function setColor(strColor) {
	document.getElementById("currentColor").value= strColor;
	document.getElementById("curColor").style.background = strColor;
	
}	


