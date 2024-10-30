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

function Footer() {
    const handleClick = (event) => {
        if (event.currentTarget.id === 'gh') {
            //window.open('https://github.com/keytonic', '_blank');
            setTimeout('window.open(\'https://github.com/keytonic\', \'_blank\');', 1000);
        }
        else if (event.currentTarget.id === 'fb') {
            //window.open('https://www.facebook.com/keytonic', '_blank');
            setTimeout('window.open(\'https://www.facebook.com/keytonic\', \'_blank\');', 1000);
        }
        else if (event.currentTarget.id === 'ig') {
            //window.open('https://www.instagram.com/drootown', '_blank');
            setTimeout('window.open(\'https://www.instagram.com/drootown\', \'_blank\');', 1000);
        }
        else if (event.currentTarget.id === 'li') {
            //window.open('https://www.linkedin.com/in/townera', '_blank');
            setTimeout('window.open(\'https://www.linkedin.com/in/townera\', \'_blank\');', 1000);
        }
        else {
            alert(event.currentTarget.id);
        }
    };
    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(from var(--primary_color) r g b / 60%)', borderTop: '1px solid hsla(210, 14%, 28%, 0.3)' , backdropFilter: 'blur(8px)'}}>
            <Container sx={{ maxWidth: '1320px' }} maxWidth={false}>
                <Toolbar disableGutters sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', flexWrap: 'wrap',marginTop: { xs: '10px', md: '0px' }, marginBottom: { xs: '10px', md: '0px' } }}>
                    <Box sx={{ width: { md: '33.3333%', xs: '100%' } }}>
                        <Typography variant="subtitle1" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', display: 'flex', justifyContent: { md: 'flex-start', xs: 'center' } }} > Designed and Developed by Andrew Towner. </Typography>
                    </Box>
                    <Box sx={{ width: { md: '33.3333%', xs: '100%' } }}>
                        <Typography variant="subtitle1" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', display: 'flex', justifyContent: 'center' }} >© 2024 AndrewTowner.com. All rights reserved.</Typography>
                    </Box>
                    <Box sx={{ width: { md: '33.3333%', xs: '100%' }, display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' }, gap: '10px' }}>
                        <IconButton onClick={handleClick} id="gh" aria-label="GitHub" sx={{color:'var(--accent_color)'}}><GitHubIcon /></IconButton>
                        <IconButton onClick={handleClick} id="fb" aria-label="Facebook" sx={{color:'var(--accent_color)'}}><FacebookIcon /></IconButton>
                        <IconButton onClick={handleClick} id="ig" aria-label="Instagram" sx={{color:'var(--accent_color)'}}><InstagramIcon /></IconButton>
                        <IconButton onClick={handleClick} id="li" aria-label="LinkedIn" sx={{color:'var(--accent_color)'}}><LinkedInIcon /></IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Footer;