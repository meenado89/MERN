import './Home.css';
import hero from '../assets/hero-img.png'

const Home = () => {
  return (
      <body>
        
      
    
    <div className="nav-bar">
      <ul>
        <li className="logo">New Arsha</li>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Team</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Dropdown</li>
        <li>Contact</li>
        <li><button className='home-btn'>Get Started</button></li>
      </ul>
    </div>
    <section className='hero'>
      <div className="hero-container">
        <div className="row">
          <div className="col-6">
            <h1>Better Solutions For Your Business</h1>
            <h3>We are team of talented designers making websites with Bootstrap</h3>
            <button>Get Started</button>
          </div>
          <div className="col-6">
            <img src={hero} alt="hero-Img" />
          </div>
        </div>
      </div>
    </section>

    </body>
     );
};

export default Home;
