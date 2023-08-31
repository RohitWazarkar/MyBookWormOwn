import React from "react";

const doSubmit=()=>{
 
 if(window.confirm("are your sure for submit this form !!"))
    alert("Data Submitted Successfully")
    document.title="Data Submitted !"
}


function SignUpPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <div className="card" style={{ width: "1000px" }}>
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
          <h5 className="card-title">Customer Registration Form</h5>
          <br></br>
          <p className="card-text">
            <div>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="customer_name"
                      placeholder="Enter full name here "
                      required
                    />
                    <label htmlFor="validationCustom01" className="form-label">
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </div>


               

                <div className="col-md-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="customer_contact_no"
                      placeholder="Contact Number"
                      required
                    /><br></br>
                    <label htmlFor="validationCustom01" className="form-label">
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </div>

               
               

                <div class="col-md-4">
          <div class="input-group form-outline">
            <span class="input-group-text" id="customer_email">@</span>
            <input type="text" class="form-control" placeholder="Email ID" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <label for="validationCustomUsername" class="form-label"></label>
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-outline">
            <input type="text"  placeholder="Enter your City "  class="form-control" id="validationCustom03" required />
            <label for="validationCustom03"class="form-label"></label>
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-outline">
            <input type="text" class ="form-control" id="validationCustom05"  placeholder="Enter your Zip Code" />
            <label for="validationCustom05" class="form-label"></label>
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-outline">
            <input type="text" class ="form-control" id="validationCustom05"  placeholder="Set your username " />
            <label for="validationCustom05" class="form-label"></label>
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-outline">
            <input type="text" class ="form-control" id="password"  placeholder="set your Password" />
            <label for="validationCustom05" class="form-label"></label>
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
        </div>


                <div className="col-12">
                  <button className="btn btn-primary" type="submit" onClick={doSubmit}>
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
