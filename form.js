const form = document.getElementById("form");

const nm=document.getElementById("name");
const em=document.getElementById("email");
const pw=document.getElementById("password");
const conp=document.getElementById("confirm");

const er1=document.getElementById("err1");
const er2=document.getElementById("err2");
const er3=document.getElementById("err3");
const er4=document.getElementById("err4");


const success = document.getElementById("success");
let isValid = true;
form.addEventListener("submit", function(event){
    event.preventDefault();
    //name validation
    if (nm.value.length < 3) {
        er1.innerText = "Name must be at least 3 cahracters.";
        isValid = false;
    }
    //email validation
    if (em.value.includes("@") == false) {
        er2.innerText = "Email must contain @.";
        isValid = false;
    }
    //password validation
    if (pw.value.length < 8) {
        er3.innerText = "Password must be at least 8 cahracters.";
        isValid = false;
    }
    //confirm validation 
    if (conp.value != pw.value) {
        er4.innerText = "Password must be same";
        isValid = false;
    }
    if (isValid == true){
        success.innerText = "Registration Successful!!";
        success.style.color="lime";

    }
});