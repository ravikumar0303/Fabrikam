function checkPassword(inputtxt){
    var passw=  /^[A-Za-z]\w{7,50}$/;
    if(inputtxt.value.match(passw)) 
    { 
    document.getElementById("error").innerText ='';
    return true;
    }
    else
    { 
        document.getElementById("error").innerText ='Wrong...!Enter only letter and numbers only from 7 to 50 characters';
    return false;
    }
}

function checkEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        document.getElementById("error").innerText ='';
    return true;
    }
    else
    {
        document.getElementById("error").innerText = "You have entered an invalid email address!";
    return false;
    }
}