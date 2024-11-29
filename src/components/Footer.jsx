import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    let style = getComputedStyle(document.body);
    let trans = style.getPropertyValue('--trans');
    let primary_color_trans = style.getPropertyValue('--primary_color') + trans;
    //let accent_color_trans = style.getPropertyValue('--accent_color') + "26";

    return (
        <AppBar
            id="tehfoot"
            position="static"
            sx={{
                borderTop: '1px solid hsla(210, 14%, 28%, 0.3)',
                backgroundColor: primary_color_trans + ' !important',
                backdropFilter: 'blur(2px) !important',
            }}
        >
            <Container sx={{ maxWidth: '1320px' }} maxWidth={false}>
                <Toolbar disableGutters sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', flexWrap: 'wrap', marginTop: { xs: '10px', md: '0px' }, marginBottom: { xs: '10px', md: '0px' } }}>
                    <Box sx={{ width: { md: '33.3333%', xs: '100%' } }}>
                        <Typography variant="subtitle1" sx={{ flexGrow: 1, color: 'var(--third_color)', textDecoration: 'none', display: 'flex', justifyContent: { md: 'flex-start', xs: 'center', textShadow: '2px 2px var(--primary_color) !important' } }} > Designed and Developed by Andrew Towner. </Typography>
                    </Box>
                    <Box sx={{ width: { md: '33.3333%', xs: '100%' } }}>
                        <Typography variant="subtitle1" sx={{ flexGrow: 1, color: 'var(--third_color)', textDecoration: 'none', display: 'flex', justifyContent: 'center', textShadow: '2px 2px var(--primary_color) !important' }} >© 2024 AndrewTowner.com. All rights reserved.</Typography>
                    </Box>
                    <Box sx={{ width: { md: '33.3333%', xs: '100%' }, display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' }, gap: '10px' }}>
                        <IconButton
                            className="socials"
                            aria-label="GitHub"
                            href="https://github.com/keytonic"
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            className="socials"
                            aria-label="Facebook"
                            href="https://www.facebook.com/keytonic"
                            target="_blank"
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            className="socials"
                            aria-label="Instagram"
                            href="https://www.instagram.com/drootown"
                            target="_blank"
                        >
                            <InstagramIcon />
                        </IconButton>
                        <IconButton
                            className="socials"
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/townera"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}