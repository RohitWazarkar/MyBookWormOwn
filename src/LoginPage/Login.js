import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function submitData  () 
 {
   
    if (window.confirm("Are you sure you want to submit the data?")) {
        // <enter the fetch method here ></enter>
    alert("Data submitted !!")
    } else {
      alert("Go to the home page");
    }
  };

const Login= () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [employee, setEmployee] = useState(null); // State for employee data
  

  useEffect(() => {
    // Simulate fetching employee data from a JSON file
    fetch('/path-to-employees.json')
      .then(response => response.json())
      .then(data => {
        // For simplicity, let's assume we're logging in the first employee
        setEmployee(data[0]);
      });
  }, []);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (<div>
    <div style={{ textAlign: "center" }}>
        <h1>Please login here.....</h1>
      </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", width:"1500" ,borderRadius:'15' }}>
       
    <div className="card"   >
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </div>
            <div className="card-body" class={{}}>
              <h5 className="card-title">Login Page </h5>
              <p className="card-text">
                <div>
                <div>
          <form>
      <div class="form-outline mb-4">
        <input type="email" id="customer_email" class="form-control" />
        <label class="form-label" for="form1Example1">Email address</label>
      </div>
    
      <div class="form-outline mb-4">
        <input type="password" id="password" class="form-control" />
        <label class="form-label" for="form1Example2">Password</label>
      </div>
    
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
        
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
            <label class="form-check-label" for="form1Example3"> Remember me </label>
          </div>
        </div>
    
        <div class="col">
          <a href="#!">Forgot password?</a>
        </div><br></br>
      
      </div>
      <div class="col" style={{aligntext:"center"}}>
          <h6>are you first time here <a href='/SignUpPage'><ul>click here for Registration</ul> </a></h6>
        </div>
      <button type="submit" onClick={submitData} class="btn btn-primary btn-block">Sign in</button>
    </form>
        </div> 
                </div>
              </p>
            </div>
          </div>
    </div>
    </div>
  );
};

export default Login;


