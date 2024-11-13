import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GitHubCalendar from 'react-github-calendar';
//https://grubersjoe.github.io/react-github-calendar
//https://www.npmjs.com/package/react-github-calendar

export default function About()
{
    let style = getComputedStyle(document.body);

    const ghTheme = {
        light: [style.getPropertyValue('--primary_color') + "d4", style.getPropertyValue('--accent_color') + "d4"],
        dark: [style.getPropertyValue('--primary_color') + "d4", style.getPropertyValue('--accent_color') + "d4"]
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