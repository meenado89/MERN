import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        {/* <Navbar/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        {/* <Footer/> */}
      </Routes>
    </>
  );
}

export default App;
