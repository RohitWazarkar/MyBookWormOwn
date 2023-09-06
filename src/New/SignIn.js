// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';


// function SignIn() {
//   let navigate = useNavigate();

//   const initialValues = {
//     email: '',
//     password: ''
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().required('Email is required'),
//     password: Yup.string().required('Password is required')
//   });

//   const handleSubmit = (values) => {
//     console.log(values);

//     fetch("http://localhost:8080/auth/login", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "email": values.email,
//         "password": values.password
//       })
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data.jwtToken);
//         localStorage.setItem("Token", data.jwtToken);
//         navigate("/", { replace: true });
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   };


//   return (
//     <section className="vh-100">
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-sm-6 text-black">
//           <div className="px-5 ms-xl-4">
//             <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
//             <span className="h1 fw-bold mb-0">Logo</span>
//           </div>

//           <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
//             <form style={{ width: '23rem' }}>
//               <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
//               <div className="form-outline mb-4">
//                 <input type="email" id="form2Example18" className="form-control form-control-lg" />
//                 <label className="form-label" htmlFor="form2Example18">Email address</label>
//               </div>
//               <div className="form-outline mb-4">
//                 <input type="password" id="form2Example28" className="form-control form-control-lg" />
//                 <label className="form-label" htmlFor="form2Example28">Password</label>
//               </div>
//               <div className="pt-1 mb-4">
//                 <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
//               </div>
//               <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
//               <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
//             </form>
//           </div>
//         </div>
//         <div className="col-sm-6 px-0 d-none d-sm-block">
//           <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
//             alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
//         </div>
//       </div>
//     </div>
//   </section>
//   );
// }

// export default SignIn;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Define a custom theme for this page
const loginTheme = createTheme();

function SignIn() {
  let navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values) => {
    console.log(values);
    alert("come to ward fetch")

    fetch("http://localhost:8080/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": values.email,
        "password": values.password
      })
    })
      .then(response => {
        alert(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        alert(data)
        console.log(data.jwtToken);
        localStorage.setItem("Token", data.jwtToken);
        navigate("/", { replace: true });
      })
      .catch(error => {
        alert("thrown error ")
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <ThemeProvider theme={loginTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh', // Make the container take the full viewport height
          width:"100%",
          backgroundColor: '#f3f4f6', // Background color
        }}
      >
        <Container component="main">
          <Box
            sx={{
              margin: "40px 0px 40px 0px",
              width: "500px !impo",
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '4rem',
              borderRadius: '1rem', // Rounded corners
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Box shadow
            }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              style={{ width: '50%', objectFit: 'cover', objectPosition: 'left' }}
            />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form style={{ width: '50%', marginLeft: '2rem', }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main'  }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
                  Sign in
                </Typography>
                <Field
                  name="email"
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                />
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <div style={{ color: 'red', marginTop: '0.5rem' }}>
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>
                <Field
                  name="password"
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <ErrorMessage name="password">
                  {(errorMsg) => (
                    <div style={{ color: 'red', marginTop: '0.5rem' }}>
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{ marginTop: 1 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 3, marginBottom: 2 }}
                >
                  Sign In
                </Button>
              </Form>
            </Formik>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SignIn;
