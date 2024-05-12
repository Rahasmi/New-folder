//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import ContactForm from './component/Contact';
import Footer from './component/Footer';
//import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import CustomCarousel from './Crousel/Crousel';
import CsharpCard from './card/CsharpCard'
import DesignCard from './card/DesignCard';
import BootstrapCard from './card/BootstrapCard';
import PythonCard from './card/PythonCard';
import JavaCard from './card/JavaCard';
import CppCard from './card/CppCard';
import Featurette1 from './About/Featurette1';
import Featurette2 from './About/Featurette2';
import Featurette3 from './About/Featurette3';
import Login from './component/Login';
//import LoginModal from './component/Login';




function Home() {
    return (
        <div>
            <CustomCarousel />
            <div className="container">
            <div className="row mb-2">
                <CsharpCard />
                <DesignCard />
                <BootstrapCard />
                <PythonCard />
                <JavaCard />
                <CppCard />
            </div>
        </div>
        </div>
    );
}

function About() {
    return(
        <div>
        <Featurette1 />
        <Featurette2 />
        <Featurette3 />
    </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/about.html" element={<About />} />
                    <Route path="/contact.html" element={<ContactForm />} />
                </Routes>
                <Footer /> {/* Place Footer inside the Router */}
            </div>
        </Router>     
    );
    
}

export default App;
