//DOM manipulation
//console.log(document.getElementById("title"));

//console.log(document instanceof HTMLDucument);

function sayHello(){
var name =
        document.getElementById("name").value;
        var message="Hello " + name +"!";

        document.getElementById("content")
        .textContent=message;
}