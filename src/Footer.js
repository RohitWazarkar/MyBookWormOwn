import React from 'react'
const Footer = () => {
  return (
  <div>
   <div>
   <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>BookWorm Library pvt.ltd
              </h6>
              <p>
              "Explore, Rent, and Buy: Your Hub for Books, Music, and Videos Online.
               Discover a world of literary wonders, melodious tunes, and captivating visuals. 
              Immerse yourself in a diverse collection of stories,
               melodies, and cinematic experiences, all at your fingertips."
              </p>

            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="/Ebook" className="text-reset">Ebooks</a>
              </p>
              <p>
                <a href="/Videos" className="text-reset">Videos</a>
              </p>
              <p>
                <a href="/Musics" className="text-reset">Musics</a>
              </p>
    
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="/Aboutus" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="/Contactus" className="text-reset">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>T.V center <strong> Sambhajinagar </strong> 431001</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                BookWormLibrary@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +91 8956618546</p>
              <p><i className="fas fa-print me-3"></i> +91 9518306112</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2023 Copyright : 
        <a className="text-reset fw-bold" href="https://BookWorm.com/"> BookWorm.com</a>
      </div>
    </footer>
   </div>
  </div>
  )
}

export default Footer;