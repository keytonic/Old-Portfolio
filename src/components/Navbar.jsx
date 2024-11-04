import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Logo from './Logo';

//const pages = ['Home', 'About', 'Projects', 'Resume'];
const pages = ['Home', 'Skills', 'Projects', 'About','Resume', 'Misc','Contact'];//added skill contactz

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar className="trans" position="sticky" sx={{ borderBottom: '1px solid hsla(210, 14%, 28%, 0.3)' }}>
            <Container sx={{ maxWidth: '1320px' }} maxWidth={false}>
                <Toolbar disableGutters>

                    {/*normal logo and text, far left*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'flex-start', gap: '25px',alignItems: 'center' }}>
                        <Logo color1="var(--accent_color)" color2="var(--primary_color)" height="50px" />
                        <Typography variant="h6" noWrap sx={{color:'var(--accent_color)'}}>Andrew Towner</Typography>
                    </Box>
                    {/*normal menu, far right*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'flex-end', gap: '25px' }}>
                        {pages.map((page,i) => (
                            <Link key={i} className="main-menu" to={page === "Home" ? "./" : "./" + page.toLowerCase()}> {page}</Link>
                        ))}
                    </Box>
                    {/*hamburger menu*/}
                    <Box sx={{ width: '33.3333%', display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="Menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon 
                                sx={{color:'var(--third_color)'}}
                            />
                        </IconButton>
                        <Menu
                          
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, borderRadius: '16px !important' }}
                        >
                            {pages.map((page,i) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link key={i} className="hamburger-menu" sx={{ textAlign: 'center' }} to={page === "Home" ? "./" : "./" + page.toLowerCase()} >{page}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/*small logo, center*/}
                    <Box sx={{ width: '33.3333%', display: { xs: 'flex', md: 'none' }, flexDirection: 'row', justifyContent: 'center' }}>
                        <Logo color1="var(--accent_color)" color2="var(--primary_color)" height="50px" />
                    </Box>
                    <Box sx={{ width: '33.3333%', display: { xs: 'flex', md: 'none' }, flexDirection: 'row', justifyContent: 'flex-start' }}>
                    </Box>



                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;