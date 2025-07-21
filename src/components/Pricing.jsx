import "./Home.css";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="price-heading text-center">
        <h1 className="text-center pt-5 mb-4 Pheading">
          <b>Pricing</b>
        </h1>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="price-grid">
        <div className="price-cards">
         {/* CARD 1 */}
          <div class="pricing-item p-4">
            <h5>Free Plan</h5>
            <p>
              <sup>$</sup>0<span> / month</span>
            </p>
            <ul>
              <li>
             
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
            
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
              
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li class="na">
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li class="na">
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="buybtn pt-4 mb-4">
                <button className="buy-btn">
              Buy Now
            </button>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="price-cards featured">
          
          <div class="pricing-item  p-4">
            <h5>Business Plan</h5>
            <p>
              <sup>$</sup>29<span> / month</span>
            </p>
            <ul>
              <li>
                
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
               
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
              
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li>
             
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li>
                
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="buybtn pt-4 mb-4">
                <button className="buy-btn featured-btn">
              Buy Now
            </button>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="price-cards">
         
          <div class="pricing-item p-4">
            <h5>Developer Plan</h5>
            <p>
              <sup>$</sup>49<span> / month</span>
            </p>
            <ul>
              <li>
               
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
             
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
         
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li>
             
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li>
               
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="buybtn pt-4 mb-4">
                <button className="buy-btn">
              Buy Now
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
