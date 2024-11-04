import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from "react";
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
export default function Misc()
{
    
    let primary_color = localStorage.getItem("primary_color");
    let secondary_color = localStorage.getItem("secondary_color");
    let third_color = localStorage.getItem("third_color");
    let accent_color = localStorage.getItem("accent_color");
    
    if(primary_color == null)
    {
        primary_color = getComputedStyle(document.body).getPropertyValue('--primary_color');
    }
    if(secondary_color == null)
    {
        secondary_color = getComputedStyle(document.body).getPropertyValue('--secondary_color');
    }
    if(third_color == null)
    {
        third_color = getComputedStyle(document.body).getPropertyValue('--third_color');
    }
    if(accent_color == null)
    {
        accent_color = getComputedStyle(document.body).getPropertyValue('--accent_color');
    }

    const [PrimaryColor, setPrimaryColor] = useState(primary_color);
    const [SecondaryColor, setSecondaryColor] = useState(secondary_color);
    const [ThirdColor, setThirdColor] = useState(third_color);
    const [AccentColor, setAccentColor] = useState(accent_color);


    function HandlePrimaryColor(event) {
        localStorage.setItem("primary_color", event.target.value);
        document.documentElement.style.setProperty("--primary_color", event.target.value);
        setPrimaryColor(event.target.value);
        setBackground(primary_color,secondary_color);
        fixTrans(primary_color, accent_color);
    }
    function HandleSecondaryColor(event) {
        localStorage.setItem("secondary_color", event.target.value);
        document.documentElement.style.setProperty("--secondary_color", event.target.value);
        setSecondaryColor(event.target.value);
        setBackground(primary_color,secondary_color);
    }
    function HandleThirdColor(event) {
        localStorage.setItem("third_color", event.target.value);
        document.documentElement.style.setProperty("--third_color", event.target.value);
        setThirdColor(event.target.value);
    }
    function HandleAccentColor(event) {
        localStorage.setItem("accent_color", event.target.value);
        document.documentElement.style.setProperty("--accent_color", event.target.value);
        setAccentColor(event.target.value);
        fixTrans(primary_color, accent_color);
    }

    function setBackground(primary_color,secondary_color)
    {
        document.getElementById("svg_rec").setAttribute("fill",secondary_color);
        document.getElementById("stop_zero").setAttribute("stop-color",secondary_color);
        document.getElementById("stop_one").setAttribute("stop-color",primary_color);
    
        let svg = document.getElementById("svgBackground");
        let background = '<svg id="svgBackground" xmlns="http://www.w3.org/2000/svg" width="100%">' + svg.innerHTML + '</svg>';
        let encoded = window.btoa(background);
        document.body.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
    }

    function fixTrans(primary_color, accent_color) {
        let elements = document.getElementsByClassName('trans');
    
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("background-color", primary_color + "70", "important");
        }
    
        elements = document.getElementsByClassName('MuiMenu-paper');
    
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("background-color", primary_color + "70", "important");
        }
    
        elements = document.getElementsByClassName('shadow');
    
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("box-shadow", "0 4px 5px 3px " + accent_color + "26", "important");
        }
    }

    function HandlePresets(event)
    {
        let p = "";
        let s = "";
        let t = "";
        let a = "";

        if(event.target.value == "Sith")
        {
            p = "#000000";
            s = "#616161";
            t = "#dfdfdf";
            a = "#ff0000";
        }
        else if(event.target.value == "Jedi")
        {
            p = "#000000";
            s = "#a37f50";
            t = "#dcceb4";
            a = "#9fe5e5";
        }
        else if(event.target.value == "Xbox")
        {
            p = "#0f1214";
            s = "#616161";
            t = "#B8BACF";
            a = "#39D353";
        }

        if( p != "" && s != "" && t != "" && a != "")
        {
            //primary
            localStorage.setItem("primary_color", p);
            document.documentElement.style.setProperty("--primary_color", p);
            setPrimaryColor(p);
            //secondary
            localStorage.setItem("secondary_color",s);
            document.documentElement.style.setProperty("--secondary_color",s);
            setSecondaryColor(s);
            //third
            localStorage.setItem("third_color", t);
            document.documentElement.style.setProperty("--third_color", t);
            setThirdColor(t);
            //accent
            localStorage.setItem("accent_color", a);
            document.documentElement.style.setProperty("--accent_color", a);
            setAccentColor(a);
            //finish up
            setBackground(p,s);
            fixTrans(p, a);
        }
    }
    

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Box sx={{ padding: '20px' }} >
                <Typography variant="h4" sx={{ display: 'inline' }}>Random </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)' }} >Stuff</Typography>
                <Typography variant="subtitle1">Some fun customization options.</Typography>
            </Box>
            <Box sx={{ maxWidth: '1320px', display: 'flex', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: { xs: 'center', md: 'stretch' } }} >
                <Box
                    className="card trans shadow"
                    sx={{
                        /*
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',*/
                        padding: '20px',
                        border: '1px solid rgba(0, 0, 0, .125)',
                        borderRadius: '16px',

                    }}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Primary Color: </Typography>
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <input id="primary_picker" onChange={HandlePrimaryColor} className="color_picker" style={{ display: 'inline' }} type="color" value={PrimaryColor} />
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Secondary Color: </Typography>
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <input onChange={HandleSecondaryColor} className="color_picker" style={{ display: 'inline' }} type="color" value={SecondaryColor} />
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Third Color: </Typography>
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <input onChange={HandleThirdColor} className="color_picker" style={{ display: 'inline' }} type="color" value={ThirdColor} />
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Accent Color: </Typography>
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <input onChange={HandleAccentColor} className="color_picker" style={{ display: 'inline' }} type="color" value={AccentColor} />
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Presets: </Typography>
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item className="grid_cell_item">
                                <select id="preset_select" onChange={HandlePresets} defaultValue="">
                                    <option value=""></option>
                                    <option value="Xbox">Xbox</option>
                                    <option value="Sith">Sith</option>
                                    <option value="Jedi">Jedi</option>
                                </select>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );

}