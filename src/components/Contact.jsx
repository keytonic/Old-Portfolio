import React, { useState } from "react";
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const CssTextField = styled(TextField)({

    '& label.Mui-focused':
    {
        color: 'var(--accent_color)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: 'var(--secondary_color)', },
        '&:hover fieldset': { borderColor: 'var(--third_color)', },
        '&.Mui-focused fieldset': { borderColor: 'var(--accent_color)', },
    },
});

function MyForm() {

    let style = getComputedStyle(document.body);
    let third_color_trans = style.getPropertyValue('--third_color') + "1a";

    const [myEmail, setmyEmail] = useState({ name: "", phone: "", email: "", message: "", render: false });
    const [myAlert, setmyAlert] = useState({ open: false, message: "", severity: "" });

    function handleSubmit(event) {
        if (myEmail.name == "" || myEmail.name.length < 3) {
            setmyAlert({ open: true, severity: "error", message: "Please enter a valid name." });
        }
        else if (myEmail.phone == "" || myEmail.phone.length < 10) {
            setmyAlert({ open: true, severity: "error", message: "Please enter a valid phone number." });
        }
        else if (myEmail.email == "" || myEmail.email.length < 8 || myEmail.email.indexOf("@") == -1) {
            setmyAlert({ open: true, severity: "error", message: "Please enter a valid email address." });
        }
        else if (myEmail.message == "") {
            setmyAlert({ open: true, severity: "error", message: "Please enter a message." });
        }
        else {
            var http = new XMLHttpRequest();

            http.onreadystatechange = function () 
            {
                if (http.readyState == 4)
                {
                    setmyAlert({ open: true, severity: "success", message: "Email sent!" });
                    setmyEmail({ name: "", email: "", phone: "", message: "" });
                }
            };

            //http.open('POST', 'post.php', true);
            //http.open('POST', 'https://www.keytonic.net/projects/email/index.php', true);
            http.open('POST', 'https://formspree.io/f/mqaqapel', true);
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            http.send(`name=${myEmail.name}&phone=${myEmail.phone}&email=${myEmail.email}&message=${myEmail.message}`);





        }
    }

    function handleChange(event) {
        if (event.target.name == "fname") {
            setmyEmail((previous) => { return { ...previous, name: event.target.value }; });
        }
        else if (event.target.name == "fphone") {
            setmyEmail((previous) => { return { ...previous, phone: event.target.value }; });
        }
        else if (event.target.name == "femail") {
            setmyEmail((previous) => { return { ...previous, email: event.target.value }; });
        }
        else if (event.target.name == "fmessage") {
            setmyEmail((previous) => { return { ...previous, message: event.target.value }; });
        }
    }

    return (
        <form autoComplete="off" name="theForm">
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }} sx={{ margin: '20px', maxWidth: '600px' }}>
                <Grid size={6} sx={{ textAlign: { sm: 'center', md: 'right' } }}>
                    <CssTextField name="fname" value={myEmail.name} onChange={handleChange} className="form_text" label="Name" variant="outlined" autoComplete="off" sx={{ width: { xs: '213px', sm: '350px', md: '213px' }, backgroundColor: third_color_trans + ' !important' }} />
                </Grid>
                <Grid size={6} sx={{ textAlign: { sm: 'center', md: 'left' } }}>
                    <CssTextField name="fphone" value={myEmail.phone} onChange={handleChange} className="form_text" label="Phone" variant="outlined" autoComplete="off" sx={{ width: { xs: '213px', sm: '350px', md: '213px' }, backgroundColor: third_color_trans + ' !important' }} />
                </Grid>
                <Grid size={12}>
                    <CssTextField name="femail" value={myEmail.email} onChange={handleChange} className="form_text" label="Email" variant="outlined" autoComplete="off" sx={{ width: { xs: '213px', sm: '350px', md: '450px' }, backgroundColor: third_color_trans + ' !important' }} />
                </Grid>
                <Grid size={12}>
                    <CssTextField name="fmessage" value={myEmail.message} onChange={handleChange} className="form_text" label="Message" multiline rows={4} sx={{ width: { xs: '213px', sm: '350px', md: '450px' }, backgroundColor: third_color_trans + ' !important' }} />
                </Grid>
                <Grid size={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Collapse in={myAlert.open} sx={{ width: { xs: '213px', sm: '350px', md: '450px' } }} >
                        <Alert
                            severity={myAlert.severity}
                            action={
                                <IconButton size="small" onClick={() => { setmyAlert((previousState) => { return { ...previousState, open: false, }; }); }} >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ marginBottom: '24px', backgroundColor: 'var(--third_color) !important', color: 'var(--primary_color) !important' }}
                        >
                            {myAlert.message}
                        </Alert>
                    </Collapse>
                    <Button variant="outlined" startIcon={<SendIcon />} onClick={handleSubmit}>Send</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default function Contact() {
    let style = getComputedStyle(document.body);
    let trans = style.getPropertyValue('--trans');
    let primary_color_trans = style.getPropertyValue('--primary_color') + trans;
    let accent_color_trans = style.getPropertyValue('--accent_color') + "26";

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Box sx={{ padding: '20px' }} >
                <Typography variant="h4" sx={{ display: 'inline', textShadow: '2px 2px var(--primary_color) !important' }}>Contact </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)' }} >Me</Typography>
                <Typography variant="subtitle1" sx={{ textShadow: '2px 2px var(--primary_color) !important' }}>Feel free to reach out!</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px' }} >
                <Box
                    className="card"
                    sx={{
                        padding: '20px',
                        border: '1px solid rgba(0, 0, 0, .125)',
                        borderRadius: '16px',
                        backgroundColor: primary_color_trans + ' !important',
                        backdropFilter: 'blur(2px) !important',
                        boxShadow: '0 4px 5px 3px ' + accent_color_trans + ' !important',
                    }}
                >
                    <MyForm />
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row', md: 'row' }} spacing={{ xs: 2, sm: 4, md: 8 }} sx={{ marginTop: '20px' }}>
                    <Chip clickable target="_blank" component="a" href="tel:2629606309" icon={<PhoneOutlinedIcon sx={{ color: 'var(--third_color) !important', }} />} label="(262) 960‑6309" variant="outlined" sx={{ color: 'var(--third_color) !important', border: '0px solid var(--third_color) !important', textShadow: '2px 2px var(--primary_color) !important' }} />
                    <Chip clickable target="_blank" component="a" href="mailto:keytonic@gmail.com" icon={<EmailOutlinedIcon sx={{ color: 'var(--third_color) !important' }} />} label="keytonic@gmail.com" variant="outlined" sx={{ color: 'var(--third_color) !important', border: '0px solid var(--third_color) !important', textShadow: '2px 2px var(--primary_color) !important' }} />
                    <Chip clickable target="_blank" component="a" href="https://maps.app.goo.gl/CeAbx7PbjUDmCFJv7" icon={<LocationOnOutlinedIcon sx={{ color: 'var(--third_color) !important' }} />} label="Seaford, VA" variant="outlined" sx={{ color: 'var(--third_color) !important', border: '0px solid var(--third_color) !important', textShadow: '2px 2px var(--primary_color) !important' }} />
                </Stack>
            </Box>
        </Box>
    );
}