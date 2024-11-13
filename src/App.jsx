
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Misc from "./components/Misc";
import Box from '@mui/material/Box';

import { useEffect } from "react";



/*
TODO:
buymeacoffee.com https://buymeacoffee.com/drootown
Patreon
crowdmade.com


add options to change background and adjust transparencies
fix hamburgermenu drop shadow color to be accent color

*/





export default function App() 
{
    let style = getComputedStyle(document.body);
    //let primary_color = localStorage.getItem("primary_color");
    //let accent_color = localStorage.getItem("accent_color");
    //let secondary_color = localStorage.getItem("secondary_color");
    //let third_color = localStorage.getItem("third_color");

    

    let colors = {
        primary_color   : localStorage.getItem("primary_color"),
        secondary_color : localStorage.getItem("secondary_color"), 
        third_color     : localStorage.getItem("third_color"),
        accent_color    : localStorage.getItem("accent_color")
    };

    if (colors.accent_color != null) {
        document.documentElement.style.setProperty("--accent_color", colors.accent_color);
    }
    else {
        colors.accent_color = style.getPropertyValue('--accent_color');
    }
    if (colors.primary_color != null) {
        document.documentElement.style.setProperty("--primary_color", colors.primary_color);
    }
    else {
        colors.primary_color = style.getPropertyValue('--primary_color');
    }
    if (colors.secondary_color != null) {
        document.documentElement.style.setProperty("--secondary_color", colors.secondary_color);
    }
    else {
        colors.secondary_color = style.getPropertyValue('--secondary_color');
    }
    if (colors.third_color != null) {
        document.documentElement.style.setProperty("--third_color", colors.third_color);
    }
    else {
        colors.third_color = style.getPropertyValue('--third_color');
    }

    let trans = localStorage.getItem("trans");

    if (trans != null) {
        document.documentElement.style.setProperty("--trans", trans);
    }
    else {
        trans = style.getPropertyValue('--trans');
    }




    function setBackground(primary_color, secondary_color) 
    {
        document.getElementById("svg_rec").setAttribute("fill", secondary_color);
        document.getElementById("stop_zero").setAttribute("stop-color", secondary_color);
        document.getElementById("stop_one").setAttribute("stop-color", primary_color);
    
        let svg = document.getElementById("svgBackground");
        let background = '<svg id="svgBackground" xmlns="http://www.w3.org/2000/svg" width="100%">' + svg.innerHTML + '</svg>';
        let encoded = window.btoa(background);
        document.body.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
    }


    setBackground(colors.primary_color, colors.secondary_color);




    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Box sx={{ minHeight: { xs: 'calc(100vh - 219px)', md: 'calc(100vh - 168px)' }, padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Misc" element={<Misc />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Box>
                <Footer colors={colors}/>
            </div>
        </BrowserRouter>
    );
}