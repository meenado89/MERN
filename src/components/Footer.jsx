import "./Home.css";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* TOP FOOTER */}

      <footer>
        <header className="news-letter">
          <div className="heading-footer text-center">
            <p className="footer-heading">Join Our Newsletter</p>
            <span>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </span>
          </div>
          <div className="sub-container">
            <form>
              <div className="Nmail">
                <label htmlFor="email-field" className="form-label"></label>
                <input
                  type="email"
                  id="email-field"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="sub-btn">
                <button className="News-sub">Subscribe</button>
              </div>
            </form>
          </div>
        </header>
      </footer>

      {/* BOTTOM FOOTER */}
      <div className="container-fluid">
        <section className="top-footer">
          {/* section 1 */}
          <div className="footer-container">
            <ul>
              <h1>ARSHA</h1>
              <li>A108 Adam Street</li>
              <li>New York, NY 535022</li>
              <li>
                <b className="text-dark">Phone:</b>
                +1 5589 55488 55
              </li>
              <li>
                <b className="text-dark">Email:</b>
                info@example.com
              </li>
            </ul>
          </div>
          {/* section 2 */}
          <div className="footer-container">
            <ul>
              <h3>Usefull Links</h3>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Terms of service</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div className="footer-container">
            <ul>
              <h3>Our Services</h3>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="footer-container">
            <h3>Follow Us</h3>
            <br />
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="icons">Add Icons</div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Footer;
