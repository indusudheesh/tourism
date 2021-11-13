var email=document.getElementById("txtEmail");
var pwd=document.getElementById("txtPwd");
var lblemail=document.getElementById("lblEmailVal");
var lblpwd=document.getElementById("lblPwdVal");
var regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
var regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function validate()
{
    //var regexp=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
        if(email.value=="" && pwd.value=="")
    {
        lblemail.innerText="*Enter an email";
        lblpwd.innerText="Enter your Password";
        email.focus();
        return false;
    }

      else if(email.value=="")
      {
      lblemail.innerText="*Enter an email";
      email.focus();
      email.style.border="red";
      return false;
      }
     
     else if(pwd.value=="")
      {
        lblemail.innerText="";
        lblpwd.innerText="*Enter your Password";
        pwd.focus(); 
        return false;
      }
  else
  {
      var e= testemail();
      var p= testpwd();
      if(p && e)
      {
        return true;
      }

      else
      return false;

  }     
  
    

}
 
//function to validate email
function testemail()
{
  if(regexpemail.test(email.value))
  {
     return true;    
  }
else
  { 
 lblemail.innerText="*Enter a valid email id";
 email.focus();
 return false;          
 } 
}

//function to validate password
function testpwd()
{
  if(regexppwd.test(pwd.value))
  { 
   return true;            
 }
 else
 {
   lblpwd.innerText="*Enter a valid password";
   pwd.focus();
   return false;
 }
}



//function to notify errors with email
function clearemail()
{
  lblemail.innerText="";
  testemail();
}

//function to notify errors with password
function clearpwd()
{
  lblpwd.innerText="";
 
  testpwd();
}
