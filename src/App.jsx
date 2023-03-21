import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
// import "../node_modules/react-bootstrap/dist/react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Box } from "@mui/material";

import "./App.css";
import Navbar from "./component/Navbar";
import Hero from './component/Hero'
import AboutUs from "./component/AboutUs";
import Services from "./component/Services";
import Works from "./component/Works";
import Team from "./component/Team";
import Testimonial from "./component/Testimonal";
import Pricing from "./component/Pricing";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Works />
      <Team />
      <Testimonial />
      <Pricing />
      <Blog />
      <Contact />
      <Footer/>
    </Box>
  );
}

export default App;
