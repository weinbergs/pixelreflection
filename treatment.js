
function draw(){
	var parsedUrl = new URL(window.location.href);

	
	var xWidth= parsedUrl.searchParams.get("width") ;
	var yHeight= parsedUrl.searchParams.get("height") ;
	xWidth = xWidth || 7;
	yHeight = yHeight || 40;
	var totalPixels = xWidth*yHeight;

	document.getElementById('canvas').style.width = 50*xWidth+"px";
	document.getElementById('canvas').style.height = 45*yHeight+"px";
	document.getElementById('column2').style.width = 50*xWidth+"px";
	document.getElementById('wrapper').style.width = 50*xWidth+90+"px";


	var lightblue 		= "#DEF4F4";
	var maple 			= "#EFE3C2";
	var osage			= "#F7E858";
	var ipe 			= "#614420";
	var cherry 			= "#A1552C";
	var heartwood 		= "#B88C51";
	var elm 			= "#936f2c";
	var purpleheart 	= "#8B3DA5";
	var paduak 			= "#C33B16";
	var month 			= 2;
	var day 			= 16;
	var monthcolor 		= lightblue;
		
		document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div class='day' style=\" text-indent:3px;\" >U</div>";
		document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div  class='day' style=\" text-indent:3px;\">M</div>";
		document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div class='day' style=\" text-indent:6px;\">T</div>";
		document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div class='day' style=\" text-indent:3px;\">W</div>";
		document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div class='day' style=\" text-indent:3px;\">H</div>";
		document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div class='day' style=\" text-indent:5px;\">F</div>";
		document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div class='day' style=\" text-indent:4px;\">S</div>";

			for (i = 1; i<totalPixels+1; i++){
			day = day+1 ;
			switch (month){
				case 2:
					if (day ==29) {
						day =1;
						month=3;
						monthcolor = "";}
					break;
				case 3:
					if (day ==32) {
						day =1;
						month=4;
						monthcolor = lightblue;}
					break;
				case 4:
					if (day ==31) {
						day =1;
						month=5;
						monthcolor 		= "";}
					if (11<day){
						if(day <16){
							monthcolor 		= "#EE4CCC";}
							else{
								monthcolor=lightblue;
							}
					}
					break;
				case 5:
					if (day ==32) {
						day =1;
						month=6;
						monthcolor = lightblue;}
					break;
				case 6:
					if (day ==31) {
						day =1;
						month=7;
						monthcolor 		= "";}
					break;
				case 7:
					if (day ==32) {
						day =1;
						month=8;
						monthcolor 		= lightblue;}
					break;
				case 8:
					if (day ==32) {
						day =1;
						month=9;
						monthcolor 		= "";}
					break;			
				case 9:
					if (day ==31) {
						day =1;
						month=10;
						monthcolor 		= lightblue;}
					break;			
				case 10:
					if (day ==31) {
						day =1;
						month=11;
						monthcolor 		= "";}
					break;			
				case 11:
					if (day ==32) {
						day =1;
						month=12;
						monthcolor 		= lightblue;}
					break;			
					
					}

			document.getElementById('canvas').innerHTML = document.getElementById('canvas').innerHTML +
			"<div id='"+i+"' class='day' style=\" color:#999999; text-indent:2px;padding-top:2px;font-size:14px;background:"+ monthcolor+";\"  onclick='color("+i+")'>"+day+"</div>";
		
		}
				writeLegend();

}
 
function color(x) {
	document.getElementById('canvas').innerHTML ="";
    draw();
	var y =0;
	y	=	chemoICECycle(x, 1);
	x	=	chemoICECycle(y, 2);
			neupegen(x-11);
			harvestCycle(x-6);
	y	=	chemoPCycle(x, 3);
			treatCodes(y-8, "pet");
	x	=	chemoICECycle(y, 4);
	
//Stem Cell Transplant Process	
	var padding = 2;
	var stem = getNextMonday(x+padding);


	stemCellCycle(stem);
	

}

function chemoICECycle(x, iRound){
	for(i = 1; i<22; i++){
		var iLocation = x+i-1;
		document.getElementById(iLocation).innerHTML = document.getElementById(iLocation).innerHTML +"<div id=\"C-"+iLocation+"\" style=\"position:relative; color:#000000; text-indent:30px;font-size:16px;padding-bottom:3px;\">"+i+"</div>";
		if(i<2){
			treatCodes(iLocation, "co");}
		if(1<i && i<5){
			treatCodes(iLocation, "ci");
			}

		if(5<i && i<14){
			treatCodes(iLocation, "n");}
		}

	x=x+21;
	return x;	
}
function chemoPCycle(x, iRound){
	for(i = 1; i<22; i++){
		var iLocation = x+i-1;
		document.getElementById(iLocation).innerHTML = document.getElementById(iLocation).innerHTML +"<div id=\"C-"+iLocation+"\" style=\"position:relative; color:#000000; text-indent:30px;font-size:16px;padding-bottom:3px;\">"+i+"</div>";
		if(i<2){
			treatCodes(iLocation, "co");}
//		if(5<i && i<14){
//			treatCodes(iLocation, "n");}
		}

	x=x+21;
	return x;	
}

function radiationCycle(stem){
//Stem Cell Radiation
	var i=1;
	var counter =0;
	var stem1 = stem+i;
	while(i<11 || counter<10){
		stem1 = stem+i;
		
		if (stem1%7>1) {
			treatCodes(stem1, "r");
			counter=counter+1;
		}else {i=i+1;}
		
		i=i+1;
	}
	return stem1;
}


function neupegen(stem){
//Stem Cell Radiation
	var i=1;
	var counter =0;

	while(i<6 ){
			stem1 = stem+i
			treatCodes(stem1, "nu");
		i=i+1;
	}
	return stem1;
}

function harvestCycle(stem){
//Stem Cell Radiation
	var i=1;
	var counter =0;

	while(i<3 ){
			stem1 = stem+i
			treatCodes(stem1, "h");
		i=i+1;
	}
	return stem1;
}


function stemCellCycle(x){
	var sDay = 0;	
	for(i = 1; i<98; i++){
		var iLocation = x+i-1;
		var sDay = i-7;	
		document.getElementById(iLocation).innerHTML = document.getElementById(iLocation).innerHTML +"<div id=\"S-"+iLocation+"\" style=\"position:relative; color:#000000; text-indent:30px;font-size:16px;\">"+sDay+"</div>";

		if(sDay<16){
			treatCodes(iLocation, "s");}
		if(15<sDay && sDay<31){
			treatCodes(iLocation, "sn");}
		if(30<sDay && sDay<61){
			treatCodes(iLocation, "sr");}
		if(60<sDay && sDay<91){
			treatCodes(iLocation, "sf");}
		}

	x=x+96;
	return x;	
	
	
}

function getNextMonday(x){

	var y = x+(7-x%7+1);
	return y;
}


	
function treatCodes(x, ttype) {
	var chemoOut	="#FC9821";
	var chemoIn 	="#ED2336";
	var radiation 	="#58C6EF";
	var petScan		="#183677";
	var neutropenic ="#F1EB38";
	var stemcell 	="#037570";
	var firstMonth	="#0898AD";
	var secondMonth	="#E69F3A";
	var thirdMonth	="#A2EF8D";
	var harvest 	="#F95001"; 
	var neupegen 	="#60357D"; 
	var divID 		="TD-"+x;
	switch(ttype){
				case "ci":
					divID 		="C-"+x;
					document.getElementById(divID).style.background = chemoIn;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">C</div>";
					break;
				case "co":
					divID 		="C-"+x;
					document.getElementById(divID).style.background = chemoOut;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">C</div>";
					break;
				case "r":
					document.getElementById(x).style.background = radiation;
				document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; color:#000000; text-indent:30px;\">R</div>";
					break;
				case "n":
					divID 		="C-"+x;
					document.getElementById(divID).style.background = neutropenic;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">N</div>";
					break;
				case "nu":
					divID 		="C-"+x;
					document.getElementById(divID).style.background = neupegen;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">H</div>";
					break;
				case "pet":
					divID 		="C-"+x;
					document.getElementById(divID).style.background = petScan;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">H</div>";
					break;

				case "h":
					divID 		="C-"+x;
					document.getElementById(divID).style.background = harvest;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">H</div>";
					break;
				case "s":
					divID 		="S-"+x;
					document.getElementById(divID).style.background = stemcell;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">S</div>";
					break;
				case "sn":
					divID 		="S-"+x;
					document.getElementById(divID).style.background = firstMonth;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">S</div>";
					break;
				case "sr":
					divID 		="S-"+x;
					document.getElementById(divID).style.background = secondMonth;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">S</div>";
					break;
				case "sf":
					divID 		="S-"+x;
					document.getElementById(divID).style.background = thirdMonth;
//					document.getElementById(x).innerHTML = document.getElementById(x).innerHTML +"<div style=\"position:relative; top:-5px; text-indent:15px;\">S</div>";
					break;
		}
		
	}
function writeLegend(){

	var radiation 			="#58C6EF";
	var neutropenic 		="#F1EB38";
	var maybeNeutropenic	="#E69F3A";
	var gtg					="#A2EF8D";
	var harvest 			="#F95001"; 
	var neupegen 			="#60357D"; 
	var petScan				="#183677";
	var chemoOut			="#FC9821";
	var chemoIn 			="#ED2336";
	var stemcell 			="#037570";
	var firstMonth			="#0898AD";

	var elementID = "column3";
	document.getElementById(elementID).innerHTML = "";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+chemoIn+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">In Patient Chemo</div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+chemoOut+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">Out Patient Chemo</div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+neutropenic+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">Neutropenic</div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+neupegen+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">Neupegen shots (up to 9 days) </div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+harvest+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">Stem Cell Harvest (maybe 3 days) </div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+petScan+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">PET Scan</div><br style=\"clear: left;\" />";
	//document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
	//	+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+radiation+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">Radiation</div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+stemcell+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">Stem Cell Transplant Process</div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+firstMonth+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">High Immuno Risk</div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+maybeNeutropenic+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">Potentially Neutropenic</div><br style=\"clear: left;\" />";
	document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML 
		+"<div id=\"color\" style=\"float:left;height:30px;width:30px;vertical-align: middle;background-color:"+gtg+";\"></div><div style=\"padding-top:5px;float:left;width:290px;text-indent:30px;\">Hopefully Good To Go </div><br style=\"clear: left;\" />";

	}

