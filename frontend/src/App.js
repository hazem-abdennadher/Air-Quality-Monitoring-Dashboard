import MyCharts from "./components/Charts/MyCharts";
import NavBar from "./components/NavBar/NavBar";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Statistics from "./components/Statistics/Statistics";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import bgImg1 from "./images/Frame1.png";
import bgImg2 from "./images/Frame2.png";
import bgImg3 from "./images/Frame3.png";
import bgImg4 from "./images/Frame4.png";
import {AnimatePresence} from "framer-motion" 
function App() {
  const location = useLocation();

  return (
    <>
      <NavBar/>
      <div className="background">
        <img src={bgImg4} alt="bg-1"/> 
        <img src={bgImg2} alt="bg-2"/> 
        <img src={bgImg1} alt="bg-4"/> 
        <img src={bgImg3} alt="bg-3"/> 
      </div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/MERN-Air-Quality-Monitoring" element={<MyCharts />} />
          <Route path="/MERN-Air-Quality-Monitoring/statistics" element={<Statistics />} />
          <Route path="/MERN-Air-Quality-Monitoring/about" element={<About />} />
          <Route path="/MERN-Air-Quality-Monitoring/contact" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
    </>
    
    );
}

export default App;
