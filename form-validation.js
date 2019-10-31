
    var myForm= document.querySelector("#registration-form");
    myForm.addEventListener("submit", validateForm);
    myForm.addEventListener("reset", resetMyForm);

    function validateForm() {
        var name = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var adress = document.getElementById("adress").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var comments = document.getElementById("comments").value;
        var hasUpperCase=false;
        var hasNumber=false;
        var hasAt=false;
        var hasPoint=false;
        var indexAt= email.indexOf("@");
        var indexPoint= email.indexOf(".",indexAt+1);
        
        
        var subLength = email.substring(indexPoint+1).length; // par exemple .f y5arejli length 2 3lch est c que ya7seb l . f toul?
        
    if ((name == "") || (lname=="") || (adress=="") || (email=="") || (password=="") || (comments=="")) {
        alert("All fields must be filled out");
      }
    if (password.length<8){
        alert("Password must contains at least 8 characters");
    }
    if(password.toLowerCase() != password) {
        hasUpperCase = true;
    }
    for ( let char of password){
        if (parseInt(char)!="NaN")
        hasNumber=true;
    }
    if (hasUpperCase ==false || hasNumber==false){
        alert("Password must contains at least a capital letter and at least a number")
    }
    if (indexAt >0 ){
        hasAt=true;
    }
    if (indexPoint>0){
        hasPoint=true;
    }
    if (hasAt==false || hasPoint==false || subLength<2 || subLength>3){
        alert("Enter a valid email adress!");
    }
   
  }
  function resetMyForm(){
    document.getElementsByClassName("formulaire-registration").reset();
  }
 



