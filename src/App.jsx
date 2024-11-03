
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Box from '@mui/material/Box';




function HandleLoad()
{

    var style           = getComputedStyle(document.body)
    let primary_color   = style.getPropertyValue('--primary_color');
    let secondary_color = style.getPropertyValue('--secondary_color');
    let accent_color = style.getPropertyValue('--accent_color');

    fixTrans(primary_color,accent_color);
    setBackground(primary_color,secondary_color);
}


function fixTrans(primary_color,accent_color)
{
    let elements = document.getElementsByClassName('trans');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = primary_color + "70";
    }

    elements = document.getElementsByClassName('shadow');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.boxShadow = "0 4px 5px 3px " + accent_color + "26";
    }
}

function setBackground(primary_color,secondary_color)
{
    document.getElementById("svg_rec").setAttribute("fill",secondary_color);
    document.getElementById("stop_zero").setAttribute("stop-color",secondary_color);
    document.getElementById("stop_one").setAttribute("stop-color",primary_color);

    let svg = document.getElementById("svgBackground");
    let background = '<svg id="svgBackground" xmlns="http://www.w3.org/2000/svg" width="100%">' + svg.innerHTML + '</svg>';
    let encoded = window.btoa(background);
    document.body.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
}



function App() {


    window.onload = HandleLoad;
    window.onclick = HandleLoad;

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
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Box>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;