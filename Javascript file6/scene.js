/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Case Problem 4

   Author: Mary Green  
   Date:   10/18/18  

   Filename: scene.js


   Function List:
   uniqueElemText(elemName)
      Returns the unique content from HTML tags with the
      tag name elemName. The list is sorted in alphabetical
      ordered and returned as an array.

*/



function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


function uniqueElemText(elemName) {
   elems = document.getElementsByTagName(elemName);
   elemsArray = new Array();

   for (var i=0; i<elems.length; i++) elemsArray[i]=elems[i].innerHTML;  
   elemsArray.sort();
   for (i=0; i<elemsArray.length-1; i++) {
      if (elemsArray[i]==elemsArray[i+1]) {
         elemsArray.splice(i+1,1);
         i--;
      }
   }
   return elemsArray;
}

function filterList (e) {
	var value = e.target.value
	elems = document.getElementById("scene").childNodes
	for(i = 0; i < elems.length; i++) {
		var elem = elems[i]
		if (elem.nodeName === 'H3') {
			if(elem.innerHTML === value) {
				elem.nextElementSibling.style.display = "block"
				elem.style.display = "block"
			} else if (value === '') { 
				elem.nextElementSibling.style.display = "block"
				elem.style.display = "block"
			} else {
				elem.style.display = "none"
				elem.nextElementSibling.style.display = "none"
			}
		}
	}
}

function generateList() {
	characterNames = uniqueElemText("h3")
	//Create the select tag
	select = document.createElement("select")
	//Create the option tag
	option = document.createElement("option")
	//Set the default option tag
	option.innerHTML = 'Show All Character Lines'
	option.value = ''
	select.appendChild(option)
	//Dynamically build option tags inside the select tag
	for(i=0; i < characterNames.length; i++) {
		option = document.createElement("option")
		option.innerHTML = characterNames[i]
		option.value = characterNames[i]
		select.appendChild(option)
	}
	//Pop the dynamically created select dropdown inside the characterList div
	document.getElementById("characterList").appendChild(select)
	//Attach event to select element
	addEvent(select, 'change', filterList, false) 
}











