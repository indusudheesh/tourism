function validate()
{

  let email=document.getElementById("txtEmail");
  let pwd=document.getElementById("txtPwd");
  let lblemail=document.getElementById("lblEmailVal");
  let lblpwd=document.getElementById("lblPwdVal");
    if(email.value=="" || pwd.value=="")
    {   
      if(email.value=="")
      {
      lblemail.innerText="*Enter an email";
      email.className="redborder";
      }
     
     if(pwd.value=="")
      {
        lblpwd.innerText="*Enter your Password";
        pwd.className="redborder";
      }
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
  let regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  let email=document.getElementById("txtEmail");
  let lblemail=document.getElementById("lblEmailVal");
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
  let regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let pwd=document.getElementById("txtPwd");
  let lblpwd=document.getElementById("lblPwdVal");

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
 document.getElementById("lblEmailVal").innerText="";
 document.getElementById("txtEmail").className="dfltborder";
  testemail();
}

//function to notify errors with password
function clearpwd()
{
  document.getElementById("lblPwdVal").innerText="";
 document.getElementById("txtPwd").className="dfltborder";
  testpwd();
}

//toggle password visibilty
function showPwd()
 {
    let chkShow=document.getElementById("chkShow");
    let pwd=document.getElementById("txtPwd");      

  if (chkShow.checked) 
  {
    pwd.type = "text";

  } 
  else
   {
    pwd.type = "password";
    
  }
} 