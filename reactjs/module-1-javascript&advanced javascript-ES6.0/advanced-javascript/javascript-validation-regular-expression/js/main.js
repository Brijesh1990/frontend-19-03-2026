function valid()
{
 if(document.frm.first_name.value=="")
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage1").innerHTML="Please enter your firstName"
        document.frm.first_name.focus();
        return false;
    }   
    // accept only alphabetic character in firstName used regular expression
    var fnm=/^[A-Za-z]+$/;
    if(!fnm.test(document.frm.first_name.value))
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage1").innerHTML="Please enter your firstName only alphabetic character"
        document.frm.first_name.focus();
        return false;
    }

     if(document.frm.last_name.value=="")
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage2").innerHTML="Please enter your lastName"
        document.frm.last_name.focus();
        return false;
    }   
    // accept only alphabetic character in firstName used regular expression
    var lnm=/^[A-Za-z]+$/;
    if(!lnm.test(document.frm.last_name.value))
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage2").innerHTML="Please enter your lastName only alphabetic character"
        document.frm.last_name.focus();
        return false;
    }

        // accept only alphabetic character in firstName used regular expression
    var fnm=/^[A-Za-z]+$/;
    if(!fnm.test(document.frm.first_name.value))
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage1").innerHTML="Please enter your firstName only alphabetic character"
        document.frm.first_name.focus();
        return false;
    }

     if(document.frm.email.value=="")
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage3").innerHTML="Please enter your Email"
        document.frm.email.focus();
        return false;
    }   
    // accept only alphabetic character in firstName used regular expression
    var em=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!em.test(document.frm.email.value))
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage3").innerHTML="Please enter your Valid email Id"
        document.frm.email.focus();
        return false;
    }

     if(document.frm.password.value=="")
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage3").innerHTML="Please enter your Password"
        document.frm.email.focus();
        return false;
    }   
    // accept only alphabetic character in firstName used regular expression
    var pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if(!pwd.test(document.frm.password.value))
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage4").innerHTML="Please enter One uppercase and lower case and special character and numbers in minimum 8 character of length"
        document.frm.password.focus();
        return false;
    }


     if(document.frm.notes.value=="")
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage5").innerHTML="Please enter your Message"
        document.frm.email.focus();
        return false;
    }   
    // accept only alphabetic character in firstName used regular expression
    var msg=/^.{1,200}$/;
    if(!msg.test(document.frm.notes.value))
    {
        // alert("Enter your firstName")
        document.getElementById("errorMessage5").innerHTML="Please enter 200 character of length with minimum one character"
        document.frm.notes.focus();
        return false;
    }
}