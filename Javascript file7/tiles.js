/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 8
   Case Problem 2

   Author:  
   Date:    

   Filename: tiles.js


   Global Variables
   flipCount
      Used to track the number of tiles currently being turned over

   firstFlip
      Used to reference the first tile turned over

   secondFlip
      Used to reference the second tile turned over


   Functions
  
   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   randomSort(arr)
      Randomly sorts the contents of the arr array.

   setOpacity(object, value)
      Sets the opacity level of object to value

   setupTiles()
      Sets up the tiles for use in the Concentration game

   flipTile()
      Flips a tile showing the image associated with the tile

   checkTiles(tile1, tile2)
      Checks whether the tile1 image source is the same as the
      tile2 image source

   flipBack()
      Flips back flipped over tiles and resets the flipCount
      variable to 0.

   



*/


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function randomSort(arr) {

   arr.sort(function () {
      return 0.5 - Math.random();
   })
   
}

function setOpacity(object, value) {


   // Apply the opacity value for IE and non-IE browsers
   object.style.filter = "alpha(opacity = " + value + ")";
   object.style.opacity = value/100;

}


/* Add new code below */

var flipCount = 0;
var firstFlip = "";
var secondFlip = "";

addEvent(window, "load", setupTiles, false);

function flipTile() {
	console.log(flipCount);
	if(flipCount === 0 ) {
		this.src = this.image.src;
		firstFlip = this;
		flipCount++;
	} 
	
	else if (flipCount === 1) {
		flipCount++;
		this.src = this.image.src;
		secondFlip = this;
		checkTiles(firstFlip, secondFlip);
	}
	return false;
}

function checkTiles(tile1, tile2) {
	console.log(tile1);
	console.log(tile2);
		if(tile1.src === tile2.src) {
			flipCount = 0;
			setOpacity(tile1, 70);
			setOpacity(tile2, 70);
			tile1.onclick = function() {
				return false;
			}
			tile2.onclick = function() {
				return false;
			}
		} else {
			setTimeout(function(){
				flipBack();
			}, 800)
		}
}

function flipBack() {
	firstFlip.src = 'tile.jpg';
	secondFlip.src = 'tile.jpg';
	flipCount = 0;
}

function setupTiles(){
	var tiles = document.getElementsByClassName("tile");
	var tileImages = new Array();
	for(var i = 0; i < tiles.length / 2; i++) {
		var src = `tileimage${i}.jpg`;
		var image = new Image();
		image.src = src;
		tileImages.push(image);
	}
	
	for(var j = tiles.length / 2; j < tiles.length; j++) {
		var src = `tile.jpg`;
		var image = new Image();
		image.src = src;
		tileImages.push(image);
	}
	
	randomSort(tileImages);
	
	for(var o = 0; o < tiles.length; o++) {
		tiles[o].image = tileImages[o];
		tiles[o].onclick = flipTile;
	}
	
	
	addEvent(document.getElementById("showAll"), "click", function() {
		for(var k = 0; k < tiles.length; k++) {
			tiles[k].src = tiles[k].image.src;
		}
	}, false);
	
	addEvent(document.getElementById("reload"), "click", function() {
		location.reload();
	}, false);
}







