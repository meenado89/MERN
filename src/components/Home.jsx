import "./Home.css";
// To Add Assets
import hero from "../assets/hero-img.png";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
// import Hero from "./Hero";

const Home = () => {
  return (
    <div id="root">
      <div className="nav-bar">
        <ul>
          <li className="logo">New Arsha</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li>Portfolio</li>
          <li>Team</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li className="nav-item dropdown">
            Dropdown
            <ol className="Homedrop-menu">
              <li className="dm">Dropdown 1</li>
              <li className="dm">Dropdown 2</li>
              <li className="sub-drop dm">
                Deep Dropdown
                <ul className="sub-menu">
                  <li className="sub-list">Deep Dropdown 1</li>
                  <li className="sub-list">Deep Dropdown 2</li>
                  <li className="sub-list">Deep Dropdown 3</li>
                  <li className="sub-list">Deep Dropdown 4</li>
                  <li className="sub-list">Deep Dropdown 5</li>
                </ul>
              </li>
              <li className="dm">Dropdown 3</li>
              <li className="dm">Dropdown 4</li>
            </ol>
          </li>

          <li>Contact</li>
          <li>
            <button className="home-btn">Get Started</button>
          </li>
        </ul>
      </div>
      <section className="hero">
        <div className="container-fluid">
          <div className="row gy-4 d-flex gap-5">
            <div className="col-lg-6 col-md-4 col-12" id="hero-text">
              <p className="fw-bolder text-white">
                Better Solutions For Your Business
              </p>
              <span>
                We are team of talented designers making websites with Bootstrap
              </span>
              <br />
              <button className="hero-Tbtn">Get Started</button>
            </div>
            <div className="col-lg-6 col-md-4 col-12">
              <img src={hero} alt="hero-Img" id="hero-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
