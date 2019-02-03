/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Case Problem 3


   Author:  Mary Green 
   Date:    11/2/18 

   Filename: orders.js


   Functions List:

  addOrder()
      Adds an order to the user's shopping cart using the entries in the
      completed order form.
*/

addEvent(window, "load", setupOrders, false);


function addOrder(event) {
	var expiryDate = new Date(); //Get the current date
	expiryDate.setDate(expiryDate.getDate() + 2); //Get the next 48 hours (2 days)
	var itemCount = 1; //Cart item count
	var cookies = document.cookie.split("; "); //Each cookie is delimited by a '; '. Split them up and turn them into an array
	for(var i = 0; i < cookies.length; i++){
		var cookieName = cookies[i].split("=")[0]; //Each cookie is delimited by an "=". Split them up and get the cookie name (first value in array)
		if(cookieName.indexOf('cartItem') > -1) { //Search for the string 'cartItem' in the cookie name
			var cartItemNumber = parseInt(cookieName.slice(cookieName.length - 1), 10); //Remove the text 'cartItem' and turn the last value(the number) into an integer
			if(cartItemNumber >= itemCount) { //If the cartItemNumber is greater than or equal to the item count, increment the cart item number
				itemCount = cartItemNumber + 1;
			}
		}
	}
	var newItem = `cartItem${itemCount}`; //Set the new item variable
	setCookie(newItem, ' ', expiryDate); //Set the cookie
	var product = document.getElementById("product").value;
	var price = document.getElementById("price").value;
	setField(newItem, 'product', product, expiryDate);
	setField(newItem, 'price', price, expiryDate);
	var allSelects = document.getElementById("orderform").querySelectorAll("select");
	
	for(var s = 0; s < allSelects.length; s++) {
		var selected = allSelects[s].options[allSelects[s].selectedIndex].text;
		var id = allSelects[s].id;
		setField(newItem, id, selected, expiryDate);
	}
	var quantity = getField(newItem, 'quantity');
	var prod = getField(newItem, 'product');
	alert(`${quantity} ${prod} added to your shopping cart`);
}

function setupOrders() {
	document.getElementById("submitButton").onclick = addOrder
	var cookies = document.cookie.split("; ");
	for(var c = 0; c < cookies.length; c++) {
		var cookie = cookies[c].split("=")[0];
		//delCookie(cookie);
	}
}






























