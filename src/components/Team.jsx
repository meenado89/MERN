import "./Home.css";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// To ADD IMG
import walter from "../assets/walterimg.webp";
import william from "../assets/williamimg.webp";
import Amanda from "../assets/amandaimg.webp";
import sara from "../assets/sara.webp";

const Team = () => {
  return (
    <>
      <section className="team-container ">
        <div className="header pt-5 text-center">
          <h1 className="Theadding pt-5">
            <b>TEAM</b>
          </h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-lg-6 col-sm-12 Tcard-container">
              {/* CARD 1 */}
              <div className="card team mb-3 ">
                <div className="row g-0">
                  <div className="col-md-4 Member-img">
                    <img src={walter} alt="Walter-Img" id="Walter-Img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="card-heading pt-2">
                        <h5 className="Team-Name">Walter White</h5>
                        <p className="">Chief Executive Officer</p>
                      </div>
                      <hr className="w-25" />
                      <p className="card-text text-dark">
                        Explicabo voluptatem mollitia et repellat qui dolorum
                        quasi
                      </p>
                      <div className="icons d-flex gap-2">
                        <p>ICON1</p>
                        <p>ICON2</p>
                        <p>ICON3</p>
                        <p>ICON4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD 2 */}
              <div className="card team mb-3">
                <div className="row g-0">
                  <div className="col-md-4 Member-img">
                    <img src={william} alt="William-Img" id="william-Img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="card-heading pt-2">
                        <h5 className="Team-Name">William Anderson</h5>
                        <p className="">CTO</p>
                      </div>
                      <hr className="w-25" />
                      <p className="card-text text-dark">
                        Quisquam facilis cum velit laborum corrupti fuga rerum
                        quia
                      </p>
                      <div className="icons d-flex gap-2">
                        <p>ICON1</p>
                        <p>ICON2</p>
                        <p>ICON3</p>
                        <p>ICON4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="col-lg-6 col-sm-12">
              {/* CARD 3 */}
              <div className="card team mb-3">
                <div className="row g-0">
                  <div className="col-md-4 Member-img">
                    <img src={sara} alt="Sara-Img" id="Sara-Img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="card-heading pt-2">
                        <h5 className="Team-Name">Sarah Jhonson</h5>
                        <p className="">Product Manager</p>
                      </div>
                      <hr className="w-25" />
                      <p className="card-text text-dark">
                        Aut maiores voluptates amet et quis praesentium qui
                        senda para
                      </p>
                      <div className="icons d-flex gap-2">
                        <p>ICON1</p>
                        <p>ICON2</p>
                        <p>ICON3</p>
                        <p>ICON4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 4*/}
              <div className="card team mb-3">
                <div className="row g-0">
                  <div className="col-md-4 Member-img">
                    <img src={Amanda} alt="Amanda-Img" id="Amanda-Img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="card-heading pt-2">
                        <h5 className="Team-Name">Amanda Jepson</h5>
                        <p className="">Accountant</p>
                      </div>
                      <hr className="w-25" />
                      <p className="card-text text-dark">
                        Dolorum tempora officiis odit laborum officiis et et
                        accusamus
                      </p>
                      <div className="icons d-flex gap-2">
                        <p>ICON1</p>
                        <p>ICON2</p>
                        <p>ICON3</p>
                        <p>ICON4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
