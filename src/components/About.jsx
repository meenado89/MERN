import Home from "./Home";
import hero from "../assets/blog-post-1.webp";
import { useState } from "react";
import 'boxicons';

const About = () => {
  const [count, setcount] = useState(1);
  const [color, setcolor] = useState("white");
  
  // DARK/LIGHT... MODE 
// const theamchange = () => {
//   if (color === "white") {
//     setcolor("black")
//     document.body.style.backgroundColor="black"
//   } else {
//     setcolor("white")
//     document.body.style.backgroundColor ="white";
//   }
// };
const [bgColor, setBgColor] = useState("white");

const theamchange = () => {
  if (bgColor === "white") {
    setBgColor("black");
    setcolor("white");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    setBgColor("white");
    setcolor("black");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};



  return (
    <>
    
      <Home
        text={" Better Solutions For Your Business"}
        subtext={" We are team of talented designers making websites with Bootstrap"}
        image={hero}
        btntext={"Get started"}
      />
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
      <button onClick={() => setcount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setcount(count - 1)}>-</button>
      <h1 style={{ color: color ==="white" ? "black" : "white" }}>my first website</h1>

      <button>change color</button>

      <button onClick={theamchange} className="mode">
        {
          color==="white"? <box-icon name='moon' type='solid' color='#ffffff' ></box-icon>:
           <box-icon name='sun' type='solid' color='#ffffff' ></box-icon>
        }

 
</button>

    </>
  );
};

export default About;
