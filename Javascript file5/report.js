/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 5
   Case Problem 2

   Author:  Mary Green	
   Date:    9/21/2018 

   Filename: report.js



   Functions List:

   initPage()
      Initializes the contents of the Web page

   testLength()
      Tests a field for its length

   testPattern()
      Tests a field for its pattern

   validateForm
      Validates a Web form

   calcRow
      Calculates the costs within one row of the travel report

   calcTotal
      Calculates the total cost of the travel

   upDate
      Updates the total travel cost
*/
window.onload = initPage;

function initPage() {
	var dataFields = [];
	
	var expenseEntries = document.getElementsByClassName("expenseEntry");
	for (i=0;i < expenseEntries.length; i++) {
		expenseEntries[i].addEventListener('blur', function(){
			console.log(this.value);
		})
		dataFields.push(expenseEntries[i]);
	}
}

function testLength(field){
	if (field.value.length === 0){
		field.style.backgroundColor = "yellow";
		return false;
	}else{
		field.style.backgroundColor = "white";
		return true;
	}	
}
function testPattern(field, regx){
	if(!regx.test(field.value)){
		field.style.backgroundColor = "yellow";
		field.style.color = "red";
		return false;
	}else{
		field.style.backgroundColor = "white";
		field.style.color = "black";
		return true;
	}	
}
function validateForm(e){
	e.preventDefault();
	var isValid = true;
	
	testLength(document.forms[0].lname);
	testLength(document.forms[0].fname);
	testLength(document.forms[0].address);
	testLength(document.forms[0].summary);
	
	var testAccount= testPattern(document.forms[0].account, /^ACT\d{6}$/g);	
			if (testAccount === false){
				isValid = false;
			}
	
	var testDepartment= testPattern(document.forms[0].department, /^DEPT\d{3}$/g);	
			if (testDepartment === false){
				isValid = false;
			}
			
	var testProject= testPattern(document.forms[0].project, /^PROJ\d{5}$/g);	
			if (testProject === false){
				isValid = false;
			}
	var socSecurity= testPattern(document.forms[0].ssn, /\d{3}-d{2}-d{4}/g);	
			if (socSecurity === false){
				isValid = false;
			}
			if (isValid === false){
				alert("Please fill out all required fields in the proper format");
			}
			return isValid;
}
function calcRow(row){
	var travel = parseFloat(document.forms[0].elements["travel" +row].value);
	var lodge = parseFloat(document.forms[0].elements["lodge" +row].value);
	var meal = parseFloat(document.forms[0].elements["meal" +row].value);
	return travel+lodge+meal;
}
function calcTotal(){
	var totalExp = 0;
	
	for(i=1; i<=4; i++){
		totalExp = totalExp+calcRow(i);
	}
	return totalExp;
}
function update(){
	var numRegExp = /^\d*(\.\d{0,2})?$/
	if(numRegExp.test(this.value)){
		this.value.toFixed(2);
	
		for(i=1; i<=4; i++){
			var sub = calcRow(i);
			document.forms[0].elements["sub" +row].value = sub.toFixed(2)
			document.forms[0].elements["total"].value = calcTotal().toFixed(2);
		}
	}else{
		alert("Invalid currency value")
		this.value = 0.00
		
		}
	
}



























