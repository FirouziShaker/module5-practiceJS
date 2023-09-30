//DOM manipulation
//console.log(document.getElementById("title"));

//console.log(document instanceof HTMLDucument);

function sayHello(){
var name =
        document.getElementById("name").value;
        var message="<h2>Hello " + name +"!</h2>";

       // document.getElementById("content")
        //.textContent=message;

        document.getElementById("content")
        .innerHTML=message;
}