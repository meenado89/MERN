import "./Home.css";
//For Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'boxicons';

import { Link } from "react-router-dom";

const Blog = () =>{
    return(
        <div className="blog-section">
        <section className="blog-Main">
            <div className="blog-tittle">
                <ol>
                   <li><Link to="./Home">Home</Link></li>
                    {/* ::Before */}/
                    <li>Blog</li>
                </ol>
            </div>
        </section>
        
        </div>
    )
}

export default Blog;
