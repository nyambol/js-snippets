/*
 Set a Cookie
*/
function setCookie(cName, cValue) {
    let expDays = 1; // one day life of cookie
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// this creates a popup dialog to get the name and 
// value of the cookie to be set
let cName = prompt("Name of Cookie: ");
let cValue = prompt("Value of Cookie: ");

setCookie(cName, cValue);

console.log("Cookie " + cName + " set to " + cValue);