/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Case Problem 3


   Author:   Mary Green
   Date:     11/2/18

   Filename: cart.js


   Functions List:

   retrieveOrder()
      Retrieves the multi-valued cookies with names starting
      with cartItem[n] where [n] is an integer that indicates
      the number of the cart item and displays the subkey
      values in a table on the page.

*/

addEvent(window, "load", retrieveOrder, false);

function retrieveOrder() {
	var cookies = document.cookie.split("; ");
	var itemsInCart = [];
	for(c = 0; c < cookies.length; c++) {
		var cookieName = cookies[c].split("=")[0];
		if (cookieName.indexOf('cartItem') > -1) {
			itemsInCart.push(cookieName);
		}
	}
	if(itemsInCart.length > 0) {
		//generate table
		var table = `<table id='cartTable'>
						<thead>
							<tr>
								<th>Product</th>
								<th>Description</th>
								<th>Qty</th>
								<th>Price</th>
								<th>Change</th>
							</tr>
						</thead>
						<tbody id='tbody'>
						</tbody>
					</table>`
		document.getElementById("cartStatus").innerHTML = table;
		
		for(var j = 0; j < itemsInCart.length; j++) {
			var tr = document.createElement('tr');
			
			var prodTd = document.createElement('td');
			prodTd.style = "background-color: rgb(255, 255, 191";
			var prod = getField(itemsInCart[j], 'product');
			prodTd.innerHTML = prod;
			tr.appendChild(prodTd);
			
			var descTd = document.createElement('td');
			var gender = getField(itemsInCart[j], 'gender') || '';
			var size = getField(itemsInCart[j], 'size') || '';
			var color = getField(itemsInCart[j], 'color') || '';
			descTd.innerHTML = `${gender} ${size} ${color}`;
			tr.appendChild(descTd);
			
			var quantityTd = document.createElement('td');
			var quantity = getField(itemsInCart[j], 'quantity');
			quantityTd.innerHTML = quantity;
			tr.appendChild(quantityTd);
			
			var priceTd = document.createElement('td');
			var price = getField(itemsInCart[j], 'price');
			priceTd.innerHTML = price;
			tr.appendChild(priceTd);
			
			var actionTd = document.createElement('td');
			var actionInput = `<input type='button' id='${itemsInCart[j]}' class='deleteItem' value='Remove Item'/>`
			
			actionTd.innerHTML = actionInput;
			tr.appendChild(actionTd);
			
			document.getElementById("tbody").appendChild(tr);
			
			document.getElementById(itemsInCart[j]).onclick = function() {
				delCookie(this.id);
				window.location.reload();
			}
		}
		
		
	} else {
		document.getElementById("cartStatus").innerHTML = 'Currently you have no items in your shopping cart.';
	}
}