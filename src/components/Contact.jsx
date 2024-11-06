import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({

    '& label.Mui-focused': 
    { 
        color: 'var(--accent_color)', 
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: 'var(--secondary_color)',},
        '&:hover fieldset': { borderColor: 'var(--third_color)',},
        '&.Mui-focused fieldset': { borderColor: 'var(--accent_color)',},
    },
});



export default function Contact() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Box sx={{ padding: '20px' }} >
                <Typography variant="h4" sx={{ display: 'inline' }}>Contact </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)' }} >Me</Typography>
                <Typography variant="subtitle1">Feel free to reach out!</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }} >
                <Box className="card trans shadow" sx={{ padding: '20px', border: '1px solid rgba(0, 0, 0, .125)', borderRadius: '16px' }} >
                    <form noValidate autoComplete="off">
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }} sx={{ margin: '20px', maxWidth: '600px' }}>
                            <Grid size={6} sx={{ textAlign: { sm: 'center', md: 'right' } }}>
                                <CssTextField label="Name" variant="outlined" autoComplete="xyz123" sx={{ width: { xs: '213px', sm: '350px', md: '213px' } }} />
                            </Grid>
                            <Grid size={6} sx={{ textAlign: { sm: 'center', md: 'left' } }}>
                                <CssTextField label="Phone" variant="outlined" autoComplete="xyz123" sx={{ width: { xs: '213px', sm: '350px', md: '213px' } }} />
                            </Grid>
                            <Grid size={12}>
                                <CssTextField label="Email" variant="outlined" autoComplete="xyz123" sx={{ width: { xs: '213px', sm: '350px', md: '450px' } }} />
                            </Grid>
                            <Grid size={12}>
                                <CssTextField label="Message" multiline rows={4} sx={{ width: { xs: '213px', sm: '350px', md: '450px' } }} />
                            </Grid>
                            <Grid size={12}>
                                <Button variant="outlined" startIcon={<SendIcon />}>Send</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}