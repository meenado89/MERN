import "./Home.css";
import "boxicons";

// To Add Assets
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import {Link} from 'react-router-dom'
// usestate
import { useState } from "react";

const Home = (props) => {
 const [showPass, setShowPass] = useState(false);

  const togglePass = (e) => {
    e.preventDefault(); 
    setShowPass((prev) => !prev);
  };
  return (
    <div>
      <section className="hero">
        <div className="container-fluid">
          <div className="row gy-4 d-flex gap-5">
            <div className="col-lg-6 col-md-4 col-12" id="hero-text">
              <p className="fw-bolder text-white">{props.text}</p>
              <span>{props.subtext}</span>
              <br />
              <button className="hero-Tbtn">{props.btntext}</button>
            </div>
            <div className="col-lg-6 col-md-4 col-12">
              <img src={props.image} alt="hero-Img" id="hero-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="SignIn">
        <div className="container">
          <div className="form-container">
            <form>
              <div className="row">
                <div className="mb-3 col-6">
                  <label htmlFor="email-field" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email-field"
                    name="email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                    type={showPass ? "text" : "password"} 
                    id="name-field"
                    name="name"
                    className="form-control"
                  />
                  <div className="visible">
                    <button onClick={togglePass} className="showbtn">
                      {showPass ? (
                        <box-icon name="show" type="solid"></box-icon>
                      ) : (
                        <box-icon name='show-alt'></box-icon>
                      )}
                    </button>
                  </div>
                </div>

                <button type="submit" className="contact-btn  w-25">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
