// pirated from Stack Overflow
const getCookieValue = (cname) => (
  document.cookie.match('(^|;)\\s*' + cname + '\\s*=\\s*([^;]+)')?.pop() || ''
)

// pops up a dialog box to get the name of the cookie to retrieve
let cname = prompt("Enter the name of the cookie: ");

getCookieValue(cname);
