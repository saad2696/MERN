

function validateForm(){

var firstName = document.getElementById("fname").value;
var lastName  = document.getElementById("lname").value;
let emailField =  document.getElementById("email").value;
let pwd = document.getElementById("pwd").value;
let pwder= document.getElementById("pwderror");
let checkBox = document.getElementById("check");
    
    var numeric =  /[0-9]/;
    var upperCase = /[A-Z]/;
    var lowerCase = /[a-z]/;
    let emailValid = /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let pwdValid =  /[\w!@#$%^&*(),.?":{}|<>]{8,20}/g;
    


    
     if(firstName == ""){
       document.getElementById("fname").value= 'First Name Required';
      

 }

if( numeric.test(firstName)==true){
    document.getElementById("fname").value= 'Numbers Not Allowed';

}
        
  if(lastName == null){
       document.getElementById("lname").value= 'Last Name Required';
    
    }

 if( numeric.test(lastName)==false){
            document.getElementById("lname").value= 'Put No. at start';
         
}

if(lastName.match(/^\d/)){
    console.log('theek hai');
 
}else{
    document.getElementById("lname").value= 'Put No. at start';
}

if(lastName.match(/[^a-z]$/i)){
    document.getElementById("lname").value= 'Put alpha at end';
}else{
    console.log('theek hai');
    
}


 if(firstName.match(/[^a-z]/g)==null){
    document.getElementById("fname").value= 'At Least one Upper Case';

 }else if( firstName.match(/[^A-Z]/g)==null) {
    document.getElementById("fname").value= 'Atleast one Lower Case';

 }
 
if(emailField.match(emailValid)){
    console.log('valid email');
}else{
    document.getElementById("email").value= 'Email Not Valid';
}

if(pwd.match(pwdValid)){
    console.log('ok hai');
}else{
    pwder.textContent='Password Not Valid';
   
}






    
}
     



