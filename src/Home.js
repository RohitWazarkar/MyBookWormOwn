import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function Home() {
  useEffect(() => {
    // Wait for the DOM to load
    $(document).ready(() => {
      // Initial state: hide image and bookworm paragraph
      $('#photo').hide();
      $('.animate-paragraph').hide();

      // Fade in image and bookworm paragraph after 15 seconds
      setTimeout(() => {
        $('.animate-paragraph').fadeIn(7000); 
        $('#photo').fadeIn(7000);
        $('.animate-paragraph').animate({ width: '50%' }, 3000);
      }, 1000);
    });
  }, []);

  return (
    <div className="fadeIn">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to BookWorm</h1>
            <p className="animate-paragraph">
              Discover an extensive library of captivating E-Books tailored to fulfill your every craving for knowledge and adventure. Immerse yourself in our curated collection and unearth a literary treasure that resonates with your curiosity and passion.
            </p>
          </div>
          <div className="col-md-6" id="photo">
            <img
              src="./Images/Homepicture.jpg"
              alt="Homepage Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-light fixed-bottom">
        <div className="container text-center">
          <span className="text-muted">
            &copy; {new Date().getFullYear()} BookWorm. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
