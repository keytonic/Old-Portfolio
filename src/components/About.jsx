import React from "react";
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import GitHubCalendar from 'react-github-calendar';
//https://grubersjoe.github.io/react-github-calendar
//https://www.npmjs.com/package/react-github-calendar







function About()
{
    let primary_color = localStorage.getItem("primary_color");
    let accent_color = localStorage.getItem("accent_color");

    if(primary_color == null) primary_color = getComputedStyle(document.body).getPropertyValue('--primary_color');
    if(primary_color == null) accent_color = getComputedStyle(document.body).getPropertyValue('--accent_color');
    
    let accent_color_trans = accent_color + "d4";
    let primary_color_trans = primary_color + "d4";

    const ghTheme = {
        light: [primary_color_trans, accent_color_trans],
        dark: [primary_color_trans, accent_color_trans],
    };

      


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">About</Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'max-content', gap: '8px' }}>
                <Typography variant="caption" sx={{ display: 'flex', width: '100%' }}>@keytonic on GitHub</Typography>
                <GitHubCalendar username="keytonic" theme={ghTheme} />
            </Box>

        </div>
    );

}

export default About;