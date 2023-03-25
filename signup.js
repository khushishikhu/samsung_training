function validate(){  
    var fname=document.getElementById(fname).value;  
    var lname=document.getElementById(lname).value
    var password=document.getElementById(password).value;  
    var status=false;  
      
    if(fname.length<1){  
    document.getElementById("nameloc").innerHTML=  
    " Please enter your name";  
    status=false;  
    }else{  
    document.getElementById("nameloc").innerHTML="Correct";  
    status=true;  
    }  
    if(lname.length<1){  
        document.getElementById("nameloc").innerHTML=  
        " Please enter your name";  
        status=false;  
        }else{  
        document.getElementById("nameloc").innerHTML="Correct";  
        status=true;  
        } 

    if(password.length<6){  
    document.getElementById("passloc").innerHTML=  
    " Password must be at least 6 char long";  
    status=false;  
    }else{  
    document.getElementById("passloc").innerHTML=" correct";  
    }  
    return status;  
    
    }  