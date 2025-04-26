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
import SettingsIcon from '@mui/icons-material/Settings';

const pages = ['Home',   'About', 'Projects', 'Resume', 'Contact'];

export default function NavBar() {
    let style = getComputedStyle(document.body);
    let trans = style.getPropertyValue('--trans');
    let primary_color_trans = style.getPropertyValue('--primary_color') + trans;
    let accent_color_trans = style.getPropertyValue('--accent_color') + "26";
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    window.onresize = function (event) {
        setAnchorElNav(null);
    };
    return (
        <AppBar
            id="tehhead"
            position="sticky"
            sx={{
                borderBottom: '1px solid hsla(210, 14%, 28%, 0.3)',
                backgroundColor: primary_color_trans + ' !important',
                backdropFilter: 'blur(2px) !important',
            }}
        >
            <Container sx={{ maxWidth: '1320px' }} maxWidth={false}>
                <Toolbar disableGutters sx={{ minHeight: '64px',justifyContent: 'space-evenly' }}>
                    {/*normal logo and text, far left*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'flex-start', gap: '25px', alignItems: 'center' }}>
                        <Logo color1='var(--accent_color)' color2='var(--primary_color)' height="50px" />
                        <Typography variant="h6" noWrap sx={{ color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color) !important' }}>Andrew Towner</Typography>
                    </Box>
                    {/*normal menu, far right*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'flex-end', gap: '25px' }}>
                        {pages.map((page, i) => (
                            <Link key={i} className="main-menu" to={(page === "Blog" ? "https://keytonic.github.io" : (page === "Home" ? "./Old-Portfolio" : "./Old-Portfolio/" + page.toLowerCase())    )}> {page}</Link>
                        ))}
                            
                        {/*
                        {pages.map((page, i) => (
                        <Link key={i} className="main-menu" to={page === "Home" ? "./" : "./" + page.toLowerCase()}> {page}</Link>
                        ))}*/}

                    </Box>
                    {/*hamburger menu*/}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            className="socials"
                            size="large"
                            aria-label="Menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon className="menu_button"
                                sx={{ color: 'var(--third_color)' }}
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                "& .MuiPaper-root": {
                                    backgroundColor: primary_color_trans + ' !important',
                                    backdropFilter: 'blur(2px) !important',
                                    borderRadius: '18px !important',
                                    boxShadow: '0 4px 5px 3px ' + accent_color_trans + ' !important',
                                }
                            }}
                        >
                            {pages.map((page, i) => (
                                <MenuItem
                                    sx={{
                                        minHeight: '48px !important',
                                    }}
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link key={i} className="hamburger-menu" sx={{ textAlign: 'center' }} to={page === "Home" ? "./Old-Portfolio" : "./Old-Portfolio/" + page.toLowerCase()} >{page}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/*small logo, center*/}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', justifyContent: 'center' }}>
                        <Logo color1='var(--accent_color)' color2='var(--primary_color)' height="50px" />
                    </Box>
                    <Box sx={{  marginLeft: { xs: '0', md: '25px' }, display: { xs: 'flex', md: 'flex' }, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Link to= "./Old-Portfolio/misc" style={{margin: '0', padding: '0', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                            <SettingsIcon className="options_button" sx={{ padding: '12px' , color: 'var(--third_color)' }} />
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}