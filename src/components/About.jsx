import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function About() {
    let style = getComputedStyle(document.body);
    let trans = style.getPropertyValue('--trans');
    let primary_color_trans = style.getPropertyValue('--primary_color') + trans;
    let accent_color_trans = style.getPropertyValue('--accent_color') + "26";
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }} >
            <Box sx={{ padding: '20px' }} >
                <Typography variant="h4" sx={{ display: 'inline', textShadow: '2px 2px var(--primary_color) !important' }}>About </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color) !important', textShadow: '2px 2px var(--primary_color) !important' }} >Me</Typography>
                <Typography variant="subtitle1" sx={{ textShadow: '2px 2px var(--primary_color) !important' }}>Get to know me better</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px', maxWidth: '680px' }} >
                <Box
                    className="card"
                    sx={{
                        padding: '20px',
                        border: '1px solid rgba(0, 0, 0, .125)',
                        borderRadius: '16px',
                        backgroundColor: primary_color_trans + ' !important',
                        backdropFilter: 'blur(2px) !important',
                        boxShadow: '0 4px 5px 3px ' + accent_color_trans + ' !important',
                        display: 'flex',
                        gap: '20px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <Typography variant="subtitle1" sx={{ textShadow: '2px 2px var(--primary_color) !important', textAlign: 'justify' }}>
                        I began coding as a teenager in the late 1990s, starting with <a className="intext" href="https://en.wikipedia.org/wiki/Visual_Basic_(classic)" target="_blank">Visual Basic 6.0 </a>
                        to create simple point-and-click applications for personal projects and enjoyment. I soon transitioned to developing mods
                        for video games like Unreal Tournament using <a className="intext" href="https://isocpp.org" target="_blank">C++</a> and <a className="intext" href="https://en.wikipedia.org/wiki/UnrealScript?WT.mc_id=14371-DEV-gamasutra-article11" target="_blank">
                            UnrealScript</a>. Around the same time, I started building websites using free hosting platforms like <a className="intext" href="https://en.wikipedia.org/wiki/GeoCities" target="_blank">
                            GeoCities</a> and <a className="intext" href="https://www.angelfire.lycos.com/aboutaf.tmpl" target="_blank">Angelfire</a>, which sparked my interest in web development.
                    </Typography>
                    <Typography variant="subtitle1" sx={{ textShadow: '2px 2px var(--primary_color) !important', textAlign: 'justify' }}>
                        As my skills grew, I began designing and hosting websites for gaming clans, gaining experience with platforms like
                        <a className="intext" href="https://wordpress.com" target="_blank"> WordPress</a> and <a className="intext" href="https://www.vbulletin.com" target="_blank">vBulletin</a>.
                        I developed custom themes, styles, and plugins for these platforms, exploring the creative and technical possibilities
                        they offered. I also worked with <a className="intext" href="https://en.wikipedia.org/wiki/ActionScript" target="_blank">ActionScript</a> to create animations and
                        applications in <a className="intext" href="https://en.wikipedia.org/wiki/Adobe_Flash" target="_blank">Macromedia Flash</a>, before <a className="intext" href="https://www.adobe.com" target="_blank">Adobe </a>
                        eventually acquired and discontinued it. Additionally, I enjoyed making custom <a className="intext" href="https://en.wikipedia.org/wiki/Myspace" target="_blank">MySpace </a>
                        themes, honing my skills with <a className="intext" href="https://www.w3schools.com/html" target="_blank">HTML</a> and <a className="intext" href="https://www.w3schools.com/css" target="_blank">CSS</a>.
                    </Typography>
                    <Typography variant="subtitle1" sx={{ textShadow: '2px 2px var(--primary_color) !important', textAlign: 'justify' }}>
                        Today, my focus is primarily on web design and development, working with <a className="intext" href="https://www.php.net" target="_blank">PHP</a>,
                        <a className="intext" href="https://www.w3schools.com/js" target="_blank"> JavaScript</a>, <a className="intext" href="https://www.w3schools.com/html" target="_blank">HTML</a>, and
                        <a className="intext" href="https://www.w3schools.com/css" target="_blank"> CSS</a>. Recently, I’ve been incorporating <a className="intext" href="https://react.dev" target="_blank">React
                        </a> into my projects more consistently, further expanding my expertise. Beyond web development, I occasionally use
                        <a className="intext" href="https://www.python.org" target="_blank"> Python</a> to create scripts for personal use, such as organizing my movie library.
                    </Typography>
                    <Typography variant="subtitle1" sx={{ textShadow: '2px 2px var(--primary_color) !important', textAlign: 'justify' }}>
                        For the past two decades, web development has been a passion I pursued alongside my career in the <a className="intext" href="https://www.airforce.com" target="_blank">
                            United States Air Force</a>. Throughout that time, I remained committed to learning new technologies, programming languages, and best
                        practices as the industry evolved. Now, as I transition back to civilian life, I’m excited to turn my long-standing passion for coding into a full-time career.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}