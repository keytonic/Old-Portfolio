import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Misc from "./components/Misc";
import Box from '@mui/material/Box';
import Backgrounds from './components/Backgrounds';
import ReactDOMServer from 'react-dom/server';
import { Link } from "react-router-dom";

import React, { Component } from 'react';

/*
Set-ExecutionPolicy Unrestricted


npm create vite@latest
npx vite dev 
npx vite build

TODO:
buymeacoffee.com https://buymeacoffee.com/drootown
Patreon
crowdmade.com

*/

export default function App() {

    let style = getComputedStyle(document.body);

    let colors = {
        primary_color: localStorage.getItem("primary_color"),
        secondary_color: localStorage.getItem("secondary_color"),
        third_color: localStorage.getItem("third_color"),
        accent_color: localStorage.getItem("accent_color")
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

    let background_name = localStorage.getItem("background_name");

    if (background_name == null) {
        background_name = "triangles";
    }

    function setBackground(primary_color, secondary_color, third_color, accent_color, background_name) {
        const htmlString = ReactDOMServer.renderToString(<Backgrounds primary_color={primary_color} secondary_color={secondary_color} third_color={third_color} accent_color={accent_color} name={background_name} />);
        let encoded = window.btoa(htmlString);
        document.body.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
    }

    setBackground(colors.primary_color, colors.secondary_color, colors.third_color, colors.accent_color, background_name);



    const RedirectPage = () => 
    {
        window.location.replace("https://keytonic.github.io");
        return null;
    };


    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Box sx={{ minHeight: { xs: 'calc(100vh - 219px)', md: 'calc(100vh - 168px)' }, padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path='/blog' element={<RedirectPage />}/>
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Misc" element={<Misc />} />
                        <Route path="*" element={<Home />} />


                        <Route path="/Old-Portfolio/" element={<Home />} />
                        <Route path="/Old-Portfolio/projects" element={<Projects />} />
                        <Route path="/Old-Portfolio/about" element={<About />} />
                        <Route path='/Old-Portfolio/blog' element={<RedirectPage />}/>
                        <Route path="/Old-Portfolio/resume" element={<Resume />} />
                        <Route path="/Old-Portfolio/Contact" element={<Contact />} />
                        <Route path="/Old-Portfolio/Misc" element={<Misc />} />
                        <Route path="/Old-Portfolio/*" element={<Home />} />



                    </Routes>
                </Box>
                <Footer colors={colors} />
            </div>
        </BrowserRouter>
    );
}