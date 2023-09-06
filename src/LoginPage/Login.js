import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  const submitData = () => {
    if (window.confirm("Are you sure you want to submit the data?")) {
      var email = document.getElementById("customer_email").value;
      var password = document.getElementById("password").value;

      if (email === "Rohitwazarkar17899@gmail.com" && password === "Rohit@123") {
        if (!isLogin) {
          setLogin(true);
          localStorage.setItem("isLogin", true);
          alert("Stored Successfully!!");
         if(localStorage.getItem("isLogin")==="true")
         {
          navigate('/Home');
         }
        }
      }
    } else {
      navigate('/LoginPage');
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Please login here.....</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", width: "1500", borderRadius: '15' }}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Login Page</h5>
            <p className="card-text">
              <form>
                <div className="form-outline mb-4">
                  <input type="email" id="customer_email" className="form-control" />
                  <label className="form-label" htmlFor="form1Example1">Email address</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="password" className="form-control" />
                  <label className="form-label" htmlFor="form1Example2">Password</label>
                </div>
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                      <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                    </div>
                  </div>
                  <div className="col">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                <div className="col" style={{ textAlign: "center" }}>
                  <h6>Are you first time here <a href='/SignUpPage'><ul>click here for Registration</ul></a></h6>
                </div>
                <button onClick={submitData} className="btn btn-primary btn-block">Sign in</button>
              </form>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
