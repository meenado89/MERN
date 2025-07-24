import "./Home.css";
// For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  // ALERT+NAVIGATE
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent");
    navigate("/");
  };
 

  return (
    <section className="addres-form ">
      <div className="container-fluid">
        <div className="af-heading text-center p-5">
          <h2 className="mb-5">Contact Us</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="contact-container">
          {/* ROW CONTAINER */}
          <div className="row gy-4">
            {/* Left Side: Address & Map */}
            <div className="col-12 col-md-4">
              <div className="address">
                <ul>
                  <li>
                    <h5>Address</h5>
                    <span>A 108 Adam Street, New York, NY 535022</span>
                  </li>
                  <li>
                    <h5>Call Us</h5>
                    <span>+1 5589 554488 55</span>
                  </li>
                  <li>
                    <h5>Email Us</h5>
                    <span>info@example.com</span>
                  </li>
                </ul>

                {/* Google Map */}
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193559.13256472183!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1753010751944!5m2!1sen!2sus"
                    width="80%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}

            <div className=" form col-12 col-md-6">
              <div className="form-container p-4 ">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-3 col-6 text-dark">
                      <label htmlFor="name-field" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name-field"
                        name="name"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3 col-6 text-dark">
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
                  </div>

                  <div className="mb-3 col-12 text-dark">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-12 text-dark">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-btn  w-25"                   
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
