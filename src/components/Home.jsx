import "./Home.css";

// To Add Assets
import hero from "../assets/hero-img.png";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div>

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





