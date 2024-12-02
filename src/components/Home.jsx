import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Me from '/images/me.png';
import Type from "./Type";

export default function Home()
{
    let style = getComputedStyle(document.body);
    let trans = style.getPropertyValue('--trans');
    let primary_color_trans = style.getPropertyValue('--primary_color') + trans;
    let accent_color_trans = style.getPropertyValue('--accent_color') + "26";

    return (
        <Box sx={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box  sx={{ maxWidth: '1320px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', width: '100%' }} >
                <Box sx={{padding: '20px 0 20px 0',display: 'flex', width:'100%', flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
                    <Box sx={{textAlign: { xs:'center',md:'left'}}}>
                        <Typography variant="h4" sx={{margin:'0 0 25px 0',textShadow: '2px 2px var(--primary_color) !important'}}>Hello There!</Typography>
                        <Typography variant="h4" sx={{ display: 'inline',margin:'25px 0 25px 0px',textShadow: '2px 2px var(--primary_color) !important'}}>I'm </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px ' + 'var(--primary_color)'}} >Andrew Towner</Typography>
                        <Typography variant="h4" sx={{margin:'25px 0 0 0',textShadow: '2px 2px var(--primary_color) !important'}}><Type /></Typography>
                    </Box>
                </Box>
                <Box sx={{padding: '20px 0 20px 0', display: 'flex', width:'100%',justifyContent: 'center'}}>
                    <Box className="card" sx={{ display: 'flex',flexDirection: 'column',justifyContent: 'flex-start',alignItems: 'center',padding: '20px',border: '1px solid rgba(0, 0, 0, .125)',borderRadius: '16px',backgroundColor: primary_color_trans + ' !important',backdropFilter: 'blur(2px) !important',boxShadow: '0 4px 5px 3px ' + accent_color_trans + ' !important',}} >
                            <Box component="img" sx={{ height: 317, width: 317, maxHeight: { xs: 200, md: 317 }, maxWidth: { xs: 200, md: 317 }, borderRadius: '16px', }} alt="Me!" src={Me} />
                    </Box>
                </Box>
            </Box>

            <Box  sx={{ maxWidth: '1320px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center' }} >
                <Typography variant="h4" sx={{margin: {md:'45px 0 45px 0',xs:'45px 0 0 0'},textShadow: '2px 2px var(--primary_color) !important'}}>Let me</Typography>
                <Typography variant="h4" sx={{margin: {md:'45px 0 45px 0',xs:'25px 0 0 0'},textShadow: '2px 2px var(--primary_color) !important', color: 'var(--accent_color)'}}>&nbsp;Introduce&nbsp;</Typography>
                <Typography variant="h4" sx={{margin: {md:'45px 0 45px 0',xs:'25px 0 45px 0'},textShadow: '2px 2px var(--primary_color) !important'}}>Myself!</Typography>
            </Box>

            <Box sx={{ maxWidth: '1320px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center',padding: '20px 0 20px 0' }} >
                <Box className="card" sx={{ padding: '20px', border: '1px solid rgba(0, 0, 0, .125)', borderRadius: '16px', backgroundColor: primary_color_trans + ' !important', backdropFilter: 'blur(2px) !important', boxShadow: '0 4px 5px 3px ' + accent_color_trans + ' !important', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }} >
                    <Typography variant="subtitle1" sx={{ textShadow: '2px 2px var(--primary_color) !important', textAlign: 'justify' }}>&nbsp;&nbsp;&nbsp;&nbsp;I am passionate about coding and skilled in C++, Python, JavaScript, CSS, and HTML. I focus on developing innovative web technologies and products, with a strong interest in using Node.js and modern JavaScript libraries and frameworks like jQuery and React. I am seeking a position where I can transform my lifelong passion for coding into a full-time career.</Typography>
                </Box>
            </Box>

        </Box>
    );
}