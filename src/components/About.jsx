// import Hero from "./Hero";
import Home from "./Home";

const About = () => {
  return (
    <>
      <Home />
      <div className="about-container">
        <h1 className=" ht text-center pt-5">About Us</h1>
        <section className="about">
          <div className="container-fluid p-5">
            <div className="row gy-4 p-5">
              <div className="col-lg-6 col-md-4 col-12" id="about-text">
                <p className="Ht-a">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>Ullamco laboris nisi ut aliquip ex ea commodo</li>
                </ul>
              </div>
              <div className="Ht-b col-lg-6 col-md-4 col-12">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <button className="about-btn">Read More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
