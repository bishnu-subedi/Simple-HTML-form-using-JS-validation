function Validation()                                    
{ 
    var account = document.forms["myForm"]["Account No"];      //Declaring variable "account"
   
    if (account.value == "")                                  
    { 
        window.alert("Please enter your Account No.");        //shows alert box if the field is empty
        account.focus(); 
        return false; 
    } 
   
      
    return true; 
}
