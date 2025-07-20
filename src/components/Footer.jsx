import "./Home.css";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="container-fluid" >
    <section className="top-footer">
      {/* section 1 */}
      <div className="footer-container">
        <ul>
          <h1>ARSHA</h1>
            <li>A108 Adam Street</li>
            <li>New York, NY 535022</li>
            <li><b>Phone:</b>
            +1 5589 55488 55
            </li>
            <li>
              <b>Email:</b>
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
      <p>Cras fermentum odio eu feugiat lide par naso tierra
        videa magna derita valies
      </p>
      <div className="icons">
        Add Icons 
      </div>
      </div>
    </section>
    </div>
    </>
  )
}
export default Footer;