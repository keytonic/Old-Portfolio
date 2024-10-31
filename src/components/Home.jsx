import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Me from '/images/me.png';
import Type from "./Type";


const Home = () => (
    <Box sx={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>


        <Box  sx={{ maxWidth: '1320px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', width: '100%' }} >
            <Box sx={{padding: '20px 0 20px 0',display: 'flex', width:'100%', flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
                <Box sx={{textAlign: { xs:'center',md:'left'}}}>
                    <Typography variant="h4" sx={{margin:'0 0 25px 0'}}>Hello there!</Typography>
                    <Typography variant="h4" sx={{ display: 'inline',margin:'25px 0 25px 0px'}}>I'm </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)'}} >Andrew Towner</Typography>
                    <Typography variant="h4" sx={{margin:'25px 0 0 0'}}><Type /></Typography>
                </Box>
            </Box>
            <Box sx={{padding: '20px 0 20px 0', display: 'flex', width:'100%',justifyContent: 'center'}}>



                <Box
              
                    className="card"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                        padding: '20px',

                        border: '1px solid rgba(0, 0, 0, .125)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 5px 3px rgb(from var(--accent_color) r g b / 15%)',
                        backgroundColor: 'rgb(from var(--primary_color) r g b / 60%)',
                    }}
                >





                    <Box
                        component="img"
                        sx={{
                            height: 317,
                            width: 317,
                            maxHeight: { xs: 200, md: 317 },
                            maxWidth: { xs: 200, md: 317 },
                            borderRadius: '16px',
                        }}
                        alt="Me!"
                        src={Me}
                    />
                </Box>
            </Box>
        </Box>

    </Box>
);

export default Home;