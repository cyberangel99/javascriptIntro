function setCookie(cName, cValue, expDate, cPath, cDomain, cSecure) {
    if (cName && cValue != "") {
       var cString = cName + "=" + escape(cValue);
       cString += (expDate ? ";expires=" + expDate.toGMTString(): "");
       cString += (cPath ? ";path=" + cPath : "");
       cString += (cDomain ? ";domain=" + cDomain : "");
       cString += (cSecure ? ";secure" : "");
       document.cookie = cString;
    }
 }
 
 
 function getCookie(cName) {
    if (document.cookie) {
       var cookies = document.cookie.split("; ");
       for (var i = 0; i < cookies.length; i++) {
          if (cookies[i].split("=")[0] == cName) {
             return unescape(cookies[i].split("=")[1]);
          }
       }
    }
 }
 
 
 function delCookie(cName) {
    if (document.cookie) {
       var cookies = document.cookie.split("; ");
       for (var i = 0; i < cookies.length; i++) {
          if (cookies[i].split("=")[0] == cName) {
             document.cookie = cName + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT";
          }
       }
    }
 }