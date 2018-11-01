/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 2
   Case Problem 4

   Author: Mary Green
   Date:  8/31/2018 

   Function List:
   dayDiff(start, stop)
      Calculates the number of days, rounded down the next lowest integer, 
      between a starting date and stopping date.

   hoursDiff(start, stop)
      Calculates the number of hours left in the current day rounded down 
      to the next lowest integer between a starting date and the stopping date.

   minutesDiff(start, stop)
      Calculates the number of minutes left in the current hour rounded down 
      to the next lowest integer between a starting date and the stopping date.

   showDate(time)
      Displays the value of the time object in the format:
      mm/dd/yyyy

   showTime(time)
      Displays the value of the time object in the format:
      hh:mm am/pm
*/


function daysDiff(currentDate, endDate){
	//creates a date object for March 23 of next year
	//calculates the difference between currentDate and March 23.
	days = (endDate - currentDate)/(1000*60*60*24);
	return days;
}

function hoursDiff(currentDate, endDate) {
	var days = daysDiff(currentDate, endDate);
	var hours = (days - Math.floor(days)) * 24;
	return hours;
}

function minutesDiff(currentDate, endDate) {
	var hours = hoursDiff(currentDate, endDate);
	var minutes = (hours - Math.floor(hours)) * 60;
	return minutes;
}

function showDate(dateObj){
	thisDate = dateObj.getDate();
	thisMonth = dateObj.getMonth()+1;
	thisYear = dateObj.getFullYear();
	return thisMonth + "/" + thisDate + "/" + thisYear;	
}
function showTime(dateObj){
	thisMinute = dateObj.getMinutes()+1;
	thisHour = dateObj.getHours();
	var ampm = thisHour < 12 ? 'am' : 'pm';
	return thisHour + ":" + thisMinute + " " + ampm
}