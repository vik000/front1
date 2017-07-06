var XHR;

if (window.XMLHttpRequest) {
    XHR = new XMLHttpRequest();
}

// XHR.open("POST", "http://localhost:8000/api/tasks", true);
XHR.open("GET", "http://localhost:8000/api/tasks", true);
XHR.setRequestHeader("Content-Type", "application/json");

XHR.onreadystatechange = function () {
    console.log(XHR);
    if (XHR.readyState === 4 && XHR.status === 200) {
        console.log(JSON.parse(XHR.responseText));
    } else if (XHR.readyState === 4 && XHR.status === 201) {
        console.log(XHR.responseText);
    } else if (XHR.readyState === 4 && XHR.status === 404) {
        console.log("Página no encontrada");
    }
}

//XHR.send(JSON.stringify({"name": "JavaScript Mola"}));
XHR.send();