// import About from "./components/About";
// import Home from "./components/Home";
// import Services from "./components/Services";
// import Navbar from './components/NavBar';
// import {Routes,Route} from 'react-router-dom'
// function App() {
//   return (
//     <>
//       <Routes>
//         <Navbar/>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/services" element={<Services/>}/>
//         {/* <Footer/> */}
//       </Routes>
//     </>
//   );
// }

// export default App;

import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;

