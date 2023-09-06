import React from 'react';
import LoginForm from './Login';
function LoginButton()
{
   var data =document.getElementById("button").value
    if(localStorage.getItem("isLogin"==="true"))
        data="Logout"
    else
        data="Login"

    return(
        <div>
            <div>
            <div >
          <a href='/Login'><button type="button" class="btn btn-primary btn-rounded  mx-3"  id="button" onClick={LoginForm} value=" ">Login</button></a>
          </div>
            </div>
        </div>
    )
}
export default LoginButton