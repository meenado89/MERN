import "./Home.css";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import { useContext, useEffect } from "react";
import blog1 from "../assets/blog-post-1.webp";
import blog2 from "../assets/blog-post-2.webp";
import blog3 from "../assets/blog-post-3.webp";
import blog4 from "../assets/blog-post-4.webp";
// FOR RECENT POST
import SqBlog1 from "../assets/blog-post-square-1.webp";
import SqBlog2 from "../assets/blog-post-square-2.webp";
import SqBlog3 from "../assets/blog-post-square-3.webp";
import SqBlog4 from "../assets/blog-post-square-4.webp";
import SqBlog5 from "../assets/blog-post-square-5.webp";

import { Link } from "react-router-dom";
import { contextProvider } from "../Context/AuthProvider";

const Blog = () => {
  const { a } = useContext(contextProvider);

  const looping = () => {
    for (let i = 0; i <= a.length - 1; i++) {
      console.log(a[i]);
    }
  };

  useEffect(() => {
    looping();
  }, []);
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
          <div className="row mb-3">
            {/* LEFT SECTION */}
            <div className="col-8">
              {/* CARD container */}
              <div className="row">
                <div className="col-6 mb-3 card-mainbody">
                  {/* CARD 1 LEFT*/}
                  <div className="Bcard-body">
                    <div className="bcard cardImage">
                      <img src={blog1} alt="blog-Img" id="Blog-Img" />
                    </div>
                    <div className="BlogCard-body">
                      <h5 className="BlogCard-title">
                        Dolorum optio tempore voluptas dignissimos cumque fuga
                        qui quibusdam quia
                      </h5>
                      <div className="comment-date d-flex gap-3 pt-2">
                        <p>
                          <box-icon name="user" size="xs"></box-icon>
                          John Doe
                        </p>
                        <p>
                          <box-icon
                            name="message-rounded-dots"
                            size="xs"
                          ></box-icon>
                          Comments (12)
                        </p>
                        <p>
                          <box-icon name="time-five" size="xs"></box-icon>
                          20 Jan 2025
                        </p>
                      </div>
                      <p className="BlogCard-text">
                        Similique neque nam consequuntur ad non maxime aliquam
                        quas. Quibusdam animi praesentium. Aliquam et laboriosam
                        eius aut nostrum quidem aliquid dicta..
                      </p>
                      <button className="Btn Blogbtn"> Read More</button>
                    </div>
                  </div>
                </div>

                {/* CARD 2 RIGHT */}
                <div className="col-6 mb-3 card-mainbody">
                  <div className="Bcard-body">
                    <div className="bcard cardImage">
                      <img src={blog2} alt="blog-Img" id="Blog-Img" />
                    </div>
                    <div className="BlogCard-body">
                      <h5 className="BlogCard-title">
                        Nisi magni odit consequatur autem nulla dolorem
                      </h5>
                      <div className="comment-date d-flex gap-3 pt-2">
                        <p>
                          <box-icon name="user" size="xs"></box-icon>
                          John Doe
                        </p>
                        <p>
                          <box-icon
                            name="message-rounded-dots"
                            size="xs"
                          ></box-icon>
                          Comments (12)
                        </p>
                        <p>
                          <box-icon name="time-five" size="xs"></box-icon>
                          20 Jan 2025
                        </p>
                      </div>
                      <p className="BlogCard-text">
                        Aut iste neque ut illum qui perspiciatis similique
                        recusandae non. Fugit autem dolorem labore omnis et. Eum
                        temporibus fugiat voluptate enim tenetur sun
                      </p>
                      <button className="Btn Blogbtn"> Read More</button>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="col-6 mb-3 card-mainbody">
                  {/* CARD 1 LEFT*/}
                  <div className="Bcard-body">
                    <div className="bcard cardImage">
                      <img src={blog3} alt="blog-Img" id="Blog-Img" />
                    </div>
                    <div className="BlogCard-body p-4">
                      <h5 className="BlogCard-title">
                        Possimus soluta ut id suscipit ea ut. In quo quia et
                        soluta libero sit sint.
                      </h5>
                      <div className="comment-date d-flex gap-3 pt-2">
                        <p>
                          <box-icon name="user" size="xs"></box-icon>
                          John Doe
                        </p>
                        <p>
                          <box-icon
                            name="message-rounded-dots"
                            size="xs"
                          ></box-icon>
                          Comments (12)
                        </p>
                        <p>
                          <box-icon name="time-five" size="xs"></box-icon>
                          20 Jan 2025
                        </p>
                      </div>
                      <p className="BlogCard-text">
                        Incidunt voluptate sit temporibus aperiam. Quia vitae
                        aut sint ullam quis illum voluptatum et. Quo libero
                        rerum voluptatem pariatur nam. Ad impedit qui officiis
                        est
                      </p>
                      <button className="Btn Blogbtn"> Read More</button>
                    </div>
                  </div>
                </div>

                {/* CARD 2 RIGHT */}
                <div className="col-6 mb-3 card-mainbody">
                  <div className="Bcard-body">
                    <div className="bcard cardImage">
                      <img src={blog4} alt="blog-Img" id="Blog-Img" />
                    </div>
                    <div className="BlogCard-body">
                      <h5 className="BlogCard-title">
                        Non rem rerum nam cum quo minus. Dolor distinctio
                        deleniti explicabo eius exercitationem.
                      </h5>
                      <div className="comment-date d-flex gap-3 pt-2">
                        <p>
                          <box-icon name="user" size="xs"></box-icon>
                          John Doe
                        </p>
                        <p>
                          <box-icon
                            name="message-rounded-dots"
                            size="xs"
                          ></box-icon>
                          Comments (12)
                        </p>
                        <p>
                          <box-icon name="time-five" size="xs"></box-icon>
                          20 Jan 2025
                        </p>
                      </div>
                      <p className="BlogCard-text">
                        Aspernatur rerum perferendis et sint. Voluptates
                        cupiditate voluptas atque quae. Rem veritatis rerum enim
                        et autem. Saepe atque cum eligendi eaque iste omnis a
                        qui. Quia sed sunt. Ea asperiores expedita
                      </p>
                      <button className="Blogbtn"> Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT SECTION */}
            <div className="col-4">
              <div className="row ">
                <div className="container">
                  {/* SEARCH */}
                  <div className="search-bar mb-3">
                    <h4>search</h4>
                    <label htmlFor=""></label>
                    <input type="text" />
                  </div>
                  {/* RRECENT POSTS */}
                  <div className="recent-posts mb-3">
                    <div className="post-heading mb-4">
                      <h5>Recent Posts</h5>
                    </div>
                    {/* post1 */}
                    <div className="post d-flex">
                      <div className="post-img">
                        <img src={SqBlog1} alt="sqblog-Img" id="SqBlog-Img" />
                      </div>
                      <div className="post-title">
                        <h6>Nihil blanditiis at in nihil autem</h6>
                        <div className="date-year">
                          <p>jan 1 2025</p>
                        </div>
                      </div>
                    </div>

                    {/* post2 */}
                    <div className="post d-flex">
                      <div className="post-img">
                        <img src={SqBlog2} alt="sqblog-Img" id="SqBlog-Img" />
                      </div>
                      <div className="post-title">
                        <h6>Quidem autem et impedit</h6>
                        <div className="date-year">
                          <p>jan 1 2025</p>
                        </div>
                      </div>
                    </div>
                    {/* post 3 */}
                    <div className="post d-flex">
                      <div className="post-img">
                        <img src={SqBlog3} alt="sqblog-Img" id="SqBlog-Img" />
                      </div>
                      <div className="post-title">
                        <h6>Id quia et et ut maxime similique occaecati ut</h6>
                        <div className="date-year">
                          <p>jan 1 2025</p>
                        </div>
                      </div>
                    </div>
                    {/* post4 */}
                    <div className="post d-flex">
                      <div className="post-img">
                        <img src={SqBlog4} alt="sqblog-Img" id="SqBlog-Img" />
                      </div>
                      <div className="post-title">
                        <h6>Laborum corporis quo dara net para</h6>
                        <div className="date-year">
                          <p>jan 1 2025</p>
                        </div>
                      </div>
                    </div>

                    {/* post 5 */}
                    <div className="post d-flex">
                      <div className="post-img">
                        <img src={SqBlog5} alt="sqblog-Img" id="SqBlog-Img" />
                      </div>
                      <div className="post-title">
                        <h6>Et dolores corrupti quae illo quod dolor</h6>
                        <div className="date-year">
                        <p>jan 1 2025</p>
                      </div>
                      </div>
                      
                    </div>
                  </div>
                  {/* CATEGORIES */}
                  <div className="categories-container mb-3">
                    <div className="categories-heading">
                      <h5>Categories</h5>
                    </div>
                    <div className="categories-list">
                      <ul>
                        <li>
                          General <span>(25)</span>
                        </li>
                        <li>
                          Lifestyle <span>(12)</span>
                        </li>
                        <li>
                          Travel <span>(05)</span>
                        </li>
                        <li>
                          Design <span>(22)</span>
                        </li>
                        <li>
                          Creative <span>(8)</span>
                        </li>
                        <li>
                          Education <span>(14)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* TAGS */}
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
