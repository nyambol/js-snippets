function setCookie(cName, cValue) {
    let expDays = 1; // one day life of cookie
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// pirated from Stack Overflow
const getCookieValue = (cname) => (
  document.cookie.match('(^|;)\\s*' + cname + '\\s*=\\s*([^;]+)')?.pop() || ''
)

function setAllSbCookies() {

    let cookies = ["ua-experience-plp", "ua-experience-pdp", "ua-experience"];
    let cValue = "seabiscuit";
    
    for (let index = 0; index < cookies.length; index++) {
        setCookie(cookies[index], cValue);
    }
    
    console.log("Cookies set: ");
    console.log("-------------------------");
    
    for (let index = 0; index < cookies.length; index++) {
        console.log(cookies[index], "\t", getCookieValue(cookies[index]));
    }
}

setAllSbCookies();