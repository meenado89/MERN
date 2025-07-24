import "./Home.css";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";

import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-section">
      <section className="blog-Main">
        <div className="blog-tittle ">
          <ol>
            <li className="home-link">
              <Link to="/">Home</Link>
            </li>
            <li className="BP">Blog</li>
          </ol>
          <p>Blog</p>
        </div>
      </section>

      <div className="blog-container">
        <div className="container P-2">
          <div className="row">
            {/* LEFT SECTION */}
            <div className="col-8">
              {/* CARD container */}
              <div className="row">
                <div className="col-6">
                  {/* CARD 1 LEFT*/}
                  <div className="card cardImage">
                    <img src="" alt="" />
                  </div>
                  <div className="BlogCard-body">
                    <h5 className="BlogCard-title">Blog Title</h5>
                    <p className="BlogCard-text">
                      blog content Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate dolorem expedita fuga! Ex
                      minima praesentium ut eaque dolore facilis, ipsa deleniti.
                      Accusamus voluptatibus amet veniam deserunt autem! Error,
                      ducimus ab!
                    </p>
                  </div>
                  <button className="Btn Blogbtn"> Read More</button>
                </div>

                {/* CARD 2 RIGHT */}
                <div className="col-6">
                  <div className="card cardImage">
                    <img src="" alt="" />
                  </div>
                  <div className="BlogCard-body">
                    <h5 className="BlogCard-title">Blog Title</h5>
                    <p className="BlogCard-text">
                      blog content Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate dolorem expedita fuga! Ex
                      minima praesentium ut eaque dolore facilis, ipsa deleniti.
                      Accusamus voluptatibus amet veniam deserunt autem! Error,
                      ducimus ab!
                    </p>
                  </div>
                  <button className="Btn Blogbtn"> Read More</button>
                </div>

                {/* 2 */}
                <div className="col-6">
                  {/* CARD 1 LEFT*/}
                  <div className="card cardImage">
                    <img src="" alt="" />
                  </div>
                  <div className="BlogCard-body">
                    <h5 className="BlogCard-title">Blog Title</h5>
                    <p className="BlogCard-text">
                      blog content Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate dolorem expedita fuga! Ex
                      minima praesentium ut eaque dolore facilis, ipsa deleniti.
                      Accusamus voluptatibus amet veniam deserunt autem! Error,
                      ducimus ab!
                    </p>
                  </div>
                  <button className="Btn Blogbtn"> Read More</button>
                </div>

                {/* CARD 2 RIGHT */}
                <div className="col-6">
                  <div className="card cardImage">
                    <img src="" alt="" />
                  </div>
                  <div className="BlogCard-body">
                    <h5 className="BlogCard-title">Blog Title</h5>
                    <p className="BlogCard-text">
                      blog content Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate dolorem expedita fuga! Ex
                      minima praesentium ut eaque dolore facilis, ipsa deleniti.
                      Accusamus voluptatibus amet veniam deserunt autem! Error,
                      ducimus ab!
                    </p>
                  </div>
                  <button className="Btn Blogbtn"> Read More</button>
                </div>
              </div>
            </div>
            {/* RIGHT SECTION */}
            <div className="col-4"></div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Blog;
