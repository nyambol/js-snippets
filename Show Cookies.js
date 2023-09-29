var c = document.cookie, cookies;
var p = {};
if (c.length == 0) {
    console.log("no cookies");
} else {
    cookies = c.split(';');
   
    for (key in cookies){
        if (cookies[key].indexOf('=') != -1){
            e = cookies[key].split('=');
            p[e[0]] = decodeURIComponent(e[1]);
        } else{
            p[key] = "";
        }
    }
    // console.table(cookies);
    console.table(p);
    
    console.log(Object.keys(p).length + " cookies found");
}

