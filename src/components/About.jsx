import React from "react";
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import GitHubCalendar from 'react-github-calendar';
//https://grubersjoe.github.io/react-github-calendar
//https://www.npmjs.com/package/react-github-calendar


const About = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4">About</Typography>


        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'max-content', gap: '8px' }}>
            <Typography variant="caption" sx={{ display: 'flex', width: '100%' }}>@keytonic on GitHub</Typography>
            <GitHubCalendar username="keytonic" />
        </Box>





    </div>
);

export default About;