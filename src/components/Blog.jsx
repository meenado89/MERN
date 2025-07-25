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
            <div className="col-4">
              <div className="row">
                <div className="container">
                  <div className="serch-bar">
                    <label htmlFor="">serch</label>
                    <input type="text" />
                  </div>
                  {/* RRECENT POSTS */}
                  <div className="recent-posts">
                    <div className="post-heading">
                      <h5>Recent Posts</h5>
                    </div>
                    {/* post1 */}
                    <div className="post">
                      <div className="-post-img">
                      <img src="" alt="" />                      
                    </div>
                    <div className="post-title">
                      <h5>Random text</h5>
                    </div>
                    <div className="date-year">
                      <p>jan 1 2025</p>
                    </div>
                    </div>

                    {/* post2 */}
                    <div className="post">
                      <div className="-post-img">
                      <img src="" alt="" />                      
                    </div>
                    <div className="post-title">
                      <h5>Random text</h5>
                    </div>
                    <div className="date-year">
                      <p>jan 1 2025</p>
                    </div>
                    </div>
                    {/* post 3 */}
                    <div className="post">
                      <div className="-post-img">
                      <img src="" alt="" />                      
                    </div>
                    <div className="post-title">
                      <h5>Random text</h5>
                    </div>
                    <div className="date-year">
                      <p>jan 1 2025</p>
                    </div>
                    </div>
                    {/* post4 */}
                    <div className="post">
                      <div className="-post-img">
                      <img src="" alt="" />                      
                    </div>
                    <div className="post-title">
                      <h5>Random text</h5>
                    </div>
                    <div className="date-year">
                      <p>jan 1 2025</p>
                    </div>
                    </div>

                    {/* post 5 */}
                    <div className="post">
                      <div className="-post-img">
                      <img src="" alt="" />                      
                    </div>
                    <div className="post-title">
                      <h5>Random text</h5>
                    </div>
                    <div className="date-year">
                      <p>jan 1 2025</p>
                    </div>
                    </div>
                  </div>
                  {/* CATEGORIES */}
                  <div className="categories-container">
                    <div className="categories-heading">
                      <h5>Categories</h5>
                    </div>
                    <div className="categories-list">
                      <ul>
                        <li>General <span>(25)</span></li>
                        <li>Lifestyle <span>(12)</span></li>
                        <li>Travel <span>(05)</span></li>
                        <li>Design <span>(22)</span></li>
                        <li>Creative <span>(8)</span></li>
                        <li>Education <span>(14)</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="tag-container">
                    <div className="tag-heading">
                      <h5>Tags</h5>
                    </div>
                    <div className="tags-list">
                      <ul className="tagList d-flex">
                        <li>App</li>
                        <li>IT</li>
                        <li>Business</li>
                        <li>Mac</li>
                        <li>Design</li>
                        <li>Office</li>
                        <li>Creative</li>
                        <li>Studio</li>
                        <li>Smart</li>
                        <li>Tips</li>
                        <li>Marketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
