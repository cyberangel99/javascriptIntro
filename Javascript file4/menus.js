window.onload = init;
var activeDinner = null;
//the javascript for the dinnerplate.com dropdown menu.
function init(){
	var dinners = new Array();
	var allElems = document.getElementsByTagName("*");
	
	for (var x = 0; x < allElems.length; x++){
		if (allElems[x].className == "dinner") dinners.push(allElems[x]);
	}	


	for (var x = 0; x < dinners.length; x++){
		dinners[x].onclick = changeDinner;
	}
	document.getElementById("logo").onclick = closeOldMenu;
	document.getElementById("wrapper").onclick = closeOldMenu;
	
}

function changeDinner(){
	closeOldMenu();
	
	dinnerID = this.id + "List";
	activeDinner = document.getElementById(dinnerID);
	activeDinner.style.display = "block";
}

function closeOldMenu(){
	console.log(activeDinner);
	if (activeDinner){
		activeDinner.style.display = "none";
		activeDinner = null;
	}
}

