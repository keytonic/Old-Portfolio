
import './App.css';
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
import './App.css';

function App() {
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