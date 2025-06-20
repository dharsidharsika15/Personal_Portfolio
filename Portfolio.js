document.getElementById("b").onclick = function(){
    document.getElementById("h1").innerHTML = "Junior Developer";
    document.getElementById("h2").innerHTML = "Intern in NoviTech";
    document.getElementById("h3").innerHTML = "BE Graduate(CSE)";
    document.getElementById("visible").style.display = "none";  // we can call the content by style keyword (img will be none(hide))
    document.getElementById("hidden").style.display = "block";   // The hidden content will show
    document.getElementById("hidden").style.color = "black";
}
