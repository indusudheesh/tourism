
//function validate :main function/onsubmit 
function validate()
{
    let first=document.getElementById("txtFirst");
    let firstval=document.getElementById("lblfirstvalid");
    let last=document.getElementById("txtLast");
    let lastval=document.getElementById("lbllastvalid");
    let email=document.getElementById("txtEmail");
    let emailval=document.getElementById("lblemailvalid");
    let phone=document.getElementById("txtPhone");
    let phoneval=document.getElementById("lblphonevalid");
    let pwd=document.getElementById("pwd");
    let pwdval=document.getElementById("lblpwdvalid");
    let cnfrmpwd=document.getElementById("cnfrmpwd");
    let cnfrmpwdval=document.getElementById("lblcnfrmpwdvalid");
    let date=document.getElementById("date");
    let dateval=document.getElementById("lbldatevalid");
    let genderval=document.getElementById("lblgendervalid");
    let female=document.getElementById("genderfemale");
    let male=document.getElementById("gendermale");
 

if(first.value=="" || last.value=="" || email.value=="" || date.value=="" || phone.value=="" || pwd.value=="" || cnfrmpwd.value=="" || (!male.checked && !female.checked))
{    
    if(first.value=="")
    {
    firstval.innerText="This field cant be empty";
    first.className="redborder";    
    }

   if(last.value=="")
    {
        lastval.innerText="This field cant be empty";
        last.className="redborder";        
    } 

    if(date.value=="")
    {
        dateval.innerText="Pick your birthday";
        date.className="redborder";        
    }

    if(email.value=="")
    {
        emailval.innerText="Enter email";
        email.className="redborder";        
    }

    if (phone.value=="")
    {
        phoneval.innerText="Enter phone number";
        phone.className="redborder";       
    } 
    
    if(pwd.value=="")
    {
        pwdval.innerText="Enter a password"
        pwd.className="redborder";       
    }  
    
    if(cnfrmpwd.value=="")
    {
        cnfrmpwdval.innerText="This field cant be empty";
        cnfrmpwd.className="redborder";     
    }

    if(!male.checked && !female.checked)
    {
        genderval.innerText="select gender";
        
    }
    return false;
}

else
{
    let e= testemail();
    let p= testpwd();
    let ph=testphone();
    let cnp=testcnfrmpwd();
    if(e && p && ph && cnp )
    {
        first.value="";
        last.value="";
        email.value="";
        phone.value="";
        pwd.value="";
        cnfrmpwd.value="";
        date.value="";
    
        return true;
    }
    else
 return false;
}

}

//function to validate password
function testpwd()
{
    let regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let pwd=document.getElementById("pwd");
  if(regexppwd.test(pwd.value))
  { 
  return true;            
 }
 else
 {
   document.getElementById("lblpwdvalid").innerText="*Enter a valid password";
 return false;
}
}


//validating email
function testemail()
{

    let regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let email=document.getElementById("txtEmail");
  if(regexpemail.test(email.value))
  {
     return true;    
  }
else
  { 
 document.getElementById("lblemailvalid").innerText="*Enter a valid email id";
 email.focus();
 return false;          
 } 
}

//validating password and check streangth
function passwordChanged()
{
   
   let strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
   let medium = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
   let adequate = /^(?=.*[a-z]).{6,}$/;
   let ind=document.getElementById("indicator");
   let pwd=document.getElementById("pwd");
    document.getElementById("lblpwdvalid").innerText=""; 
    pwd.className="dfltborder";

   if (pwd.value == "")
    {
       ind.innerHTML = '';
       ind.style.backgroundColor="";
   } 
   else if (adequate.test(pwd.value)==false)
    {
       ind.innerHTML = 'More Characters';
       ind.style.backgroundColor="yellow";
   } 
   else if (strong.test(pwd.value))
    {
       ind.innerHTML = '<span>Strong!!</span>';
       ind.style.backgroundColor="green";
   } 
   else if (medium.test(pwd.value))
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

//password visibility toggling
function showPwd()
 {
  
    let chkShow=document.getElementById("chkShow");
    let pswd=document.getElementById("pwd");
    let cnfrmpwd=document.getElementById("cnfrmpwd");       

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

//validating confirm password
function testcnfrmpwd()
{
    let ind=document.getElementById("indicator");
    let pwd=document.getElementById("pwd");
    let cnfrmpwd=document.getElementById("cnfrmpwd");
  if(pwd.value==cnfrmpwd.value)
  { 

   return true;

 }
 else
 {
    document.getElementById("lblcnfrmpwdvalid").innerText="*password mismatch! Enter again";
    pwd.value="";
   cnfrmpwd.value="";
   ind.innerHTML = '<span></span>';
   ind.style.backgroundColor="";
   return false;
 }
}

//phone number validation
function testphone()
{
    let regexpphone=/^(\d{3})([\.-]?\d{3})([\.-]?\d{4})$/;
    let phone=document.getElementById("txtPhone");
    if(regexpphone.test(phone.value))
{
    return true;
}

else
{
    document.getElementById("lblphonevalid").innerText="*Enter a valid phone number";
    phone.focus();
    return false;
}

}

//clear phone field indicator
function clearphone()
    {
        document.getElementById("lblphonevalid").innerText="";
        document.getElementById("txtPhone").className="dfltborder";
        testphone();
    }

//gender indicator clearing
function cleargender()
    {
        document.getElementById("lblgendervalid").innerText="";
    } 
  
//clear confirm password fields
 function clearcnfrmpwd()
    {
        document.getElementById("lblcnfrmpwdvalid").innerText="";
        document.getElementById("cnfrmpwd").className="dfltborder";
    
    }

    //clearing email fields
function clearemail()
{
    document.getElementById("lblemailvalid").innerText="";
    document.getElementById("txtEmail").className="dfltborder";
    testemail();

}    

//clear date field
function cleardate()
    {
        document.getElementById("lbldatevalid").innerText="";
        document.getElementById("date").className="dfltborder";
    }

//clear first name fields
function clearfirst()
    {
        document.getElementById("lblfirstvalid").innerText="";
        document.getElementById("txtFirst").className="dfltborder";
    }
//clear last name fields
function clearlast()
    {
        document.getElementById("lblfirstvalid").innerText="";
        document.getElementById("txtLast").className="dfltborder";
    }     