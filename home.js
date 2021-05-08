window.onload = function () {
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    date.innerHTML = today;
}
function askname() {
    var name = prompt("What is your name");
        
    
   
        fishname.innerHTML = "signed in as: " + "Fish "+ name ;
    
    
    
}