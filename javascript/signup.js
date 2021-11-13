var first=document.getElementById("txtFirst");
var last=document.getElementById("txtLast");
var email=document.getElementById("txtEmail");
var phone=document.getElementById("txtPhone");
var pswd=document.getElementById("pwd");
var cnfrmpwd=document.getElementById("cnfrmpwd");
var dt=document.getElementById("date");
var female=document.getElementById("genderfemale");
var male=document.getElementById("gendermale");
var chkShow=document.getElementById("chkShow");

var firstval=document.getElementById("lblfirstvalid");
var lastval=document.getElementById("lbllastvalid");
var emailval=document.getElementById("lblemailvalid");
var phoneval=document.getElementById("lblphonevalid");
var pwdval=document.getElementById("lblpwdvalid");
var cnfrmpwdval=document.getElementById("lblcnfrmpwdvalid");
var dtval=document.getElementById("lbldatevalid");
var genderval=document.getElementById("lblgendervalid");
var ind=document.getElementById("indicator");

var regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
var regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var regexpphone=/^(\d{3})([\.-]?\d{3})([\.-]?\d{4})$/;


function validate()
{
if(first.value=="" || last.value=="" || phone.value=="" || email.value=="" || dt.value=="" || pswd.value=="" ||cnfrmpwd.value=="")   
    {    if(pswd.value=="")
    {
        pwdval.innerText="Enter a password"
        pswd.className="redborder";
    }     
        if (phone.value=="")
        {
        phoneval.innerText="Enter phone number";
        phone.className="redborder";
        }    
        
        if(email.value=="")
            {
            emailval.innerText="Enter email";
            email.className="redborder";
            }

        if(first.value=="" ) 
        {

            firstval.innerText="This field cant be empty";
            first.className="redborder";
        }

        if(last.value=="")
        {

        lastval.innerText="This field cant be empty";
        last.className="redborder";
        }

        if(cnfrmpwd.value=="")
        {
            cnfrmpwdval.innerText="This field cant be empty";
            cnfrmpwd.className="redborder";
        }
        
        if(dt.value=="")
        {
        dtval.innerText="Pick your birthday";
        dt.className="redborder";
        }

        if(!male.checked && !female.checked)
        genderval.innerText="select gender";
        
        return false;
    }


else
{
    var e= testemail();
    var p= testpwd();
    var ph=testphone();
    var cnp=testcnfrmpwd();

    if(e && p && ph && cnp )
    {
        first.value="";
        last.value="";
        email.value="";
        phone.value="";
        pswd.value="";
        cnfrmpwd.value="";
        dt.value="";
    
        return true;
    }
    else
 return false;

}

}

//function to test mail
function testemail()
{
  if(regexpemail.test(email.value))
  {
     return true;    
  }
else
  { 
 emailval.innerText="*Enter a valid email id";
 email.focus();
 return false;          
 } 
}

//function to validate password
function testpwd()
{
  if(regexppwd.test(pswd.value))
  { 
  return true;            
 }
 else
 {
   pwdval.innerText="*Enter a valid password";
 return false;
}
}

function passwordChanged()
 {
    
    var strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var medium = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    var adequate = /^(?=.*[a-z]).{6,}$/;
     pwdval.innerText=""; 
     pswd.className="dfltborder";

    if (pswd.value.length == 0)
     {
        ind.innerHTML = '';
        ind.style.backgroundColor="";
    } 
    else if (adequate.test(pswd.value)==false)
     {
        ind.innerHTML = 'More Characters';
        ind.style.backgroundColor="yellow";
    } 
    else if (strong.test(pswd.value))
     {
        ind.innerHTML = '<span>Strong!!</span>';
        ind.style.backgroundColor="green";
    } 
    else if (medium.test(pswd.value))
     {
        ind.innerHTML = '<span>Medium!</span>';
        ind.style.backgroundColor="orange";
    } 
    else 
    {
        ind.innerHTML = '<span style="backgroundcolor:red">Weak!</span>';
        ind.style.backgroundColor="red";
    }
}


//function to validate phone number
function testphone()
{
    if(regexpphone.test(phone.value))
{
    return true;
}

else
{
    phoneval.innerText="*Enter a valid phone number";
    phone.focus();
    return false;
}

}

//function to confirm password
function testcnfrmpwd()
{
  if(pswd.value==cnfrmpwd.value)
  { 

   return true;

 }
 else
 {
   cnfrmpwdval.innerText="*passwords does not match enter again";
   pswd.value="";
   cnfrmpwd.value="";
   ind.innerHTML = '<span></span>';
   ind.style.backgroundColor="";
   return false;
 }
}

function clearfirst()
    {
        firstval.innerText="";
        first.className="dfltborder";
    }

function clearlast()
    {
        lastval.innerText="";
        last.className="dfltborder";
    }

function clearemail()
    {
        emailval.innerText="";
        email.className="dfltborder";
        testemail();

    }    

function clearphone()
    {
        phoneval.innerText="";
        phone.className="dfltborder";
        testphone();
    }
 function cleardate()
    {
        dtval.innerText="";
        dt.className="dfltborder";
    }
function clearpwd()
    {
        

    }
function clearcnfrmpwd()
    {
        cnfrmpwdval.innerText="";
        cnfrmpwd.className="dfltborder";
    
    }

function cleargender()
    {
        genderval.innerText="";
    } 

function showPwd()
 {
  
  if (chkShow.checked) 
  {
    pswd.type = "text";
    cnfrmpwd.type="text";
  } 
  else
   {
    pswd.type = "password";
    cnfrmpwd.type="password";
  }
}