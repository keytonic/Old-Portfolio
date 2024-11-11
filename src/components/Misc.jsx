import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';






export default function Misc()
{
    let primary_color = localStorage.getItem("primary_color");
    let secondary_color = localStorage.getItem("secondary_color");
    let third_color = localStorage.getItem("third_color");
    let accent_color = localStorage.getItem("accent_color");

    let preset_name = localStorage.getItem("preset_name");

    if(preset_name == null)
    {
        preset_name = "";
    }
    
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

    let accent_color_trans = accent_color + "26";
    let primary_color_trans = primary_color + "70";


    useEffect(() => {
/*
        let elements = document.getElementsByClassName('MuiList-root');

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("background-color", primary_color + "70", "important");
            elements[i].style.setProperty("backdrop-filter", "blur(8px)", "important");
            elements[i].style.setProperty("border-radius", "18px", "important");
        }
*/
    });



    const [PrimaryColor, setPrimaryColor] = useState(primary_color);
    const [SecondaryColor, setSecondaryColor] = useState(secondary_color);
    const [ThirdColor, setThirdColor] = useState(third_color);
    const [AccentColor, setAccentColor] = useState(accent_color);
    const [PresetName, setPresetName] = useState(preset_name);




    function HandlePrimaryColor(event) {
        SetColor(event.target.value,null,null,null);
    }
    function HandleSecondaryColor(event) {
        SetColor(null,event.target.value,null,null);
    }
    function HandleThirdColor(event) {
        SetColor(null,null,event.target.value,null);
    }
    function HandleAccentColor(event) {
        SetColor(null,null,null,event.target.value);
    }

    function SetColor(p = null, s = null, t = null, a = null)
    {
            if(p)
            {
                localStorage.setItem("primary_color", p);
                document.documentElement.style.setProperty("--primary_color", p);
                setPrimaryColor(p);
            }
            if(s)
            {
                localStorage.setItem("secondary_color",s);
                document.documentElement.style.setProperty("--secondary_color",s);
                setSecondaryColor(s);
            }
            if(t)
            {
                localStorage.setItem("third_color", t);
                document.documentElement.style.setProperty("--third_color", t);
                setThirdColor(t);
            }
            if(a)
            {
                localStorage.setItem("accent_color", a);
                document.documentElement.style.setProperty("--accent_color", a);
                setAccentColor(a);
            }
            if(p == null || s == null || t == null || a == null)
            {
                localStorage.setItem("preset_name", "");
                setPresetName("");
                //document.getElementsByTagName("input")[0].value = "";
            }
            
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
/*
    function fixTrans(primary_color, accent_color) {
        let elements = document.getElementsByClassName('trans');
    
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("background-color", primary_color + "70", "important");
            elements[i].style.setProperty("border", "1px solid " + primary_color + "40", "important");
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
*/
    function HandlePresets(event)
    {
        if(event.target.value == "Jedi")
        {
            SetColor("#212227","#606060","#ebebeb","#4b8cc8");
        }
        else if(event.target.value == "Ravens")
        {
            SetColor("#212227","#241773","#ebebeb","#9e7c0c");
        }
        else if(event.target.value == "Sith")
        {
            SetColor("#212227","#606060","#ebebeb","#ff0000");
        }
        else if(event.target.value == "Xbox")
        {
            SetColor("#212227","#606060","#ebebeb","#39D353");
        }

        localStorage.setItem("preset_name", event.target.value);
        setPresetName(event.target.value);
    }
    
    useEffect(() => {
        setBackground(PrimaryColor,SecondaryColor);
    }, [PrimaryColor,SecondaryColor]);
/*
    useEffect(() => {
        fixTrans(PrimaryColor, AccentColor);
    }, [PrimaryColor,AccentColor]);
*/
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Box sx={{ padding: '20px' }} >
                <Typography variant="h4" sx={{ display: 'inline' }}>Random </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)' }} >Stuff</Typography>
                <Typography variant="subtitle1">Some fun customization options.</Typography>
            </Box>
            <Box sx={{ maxWidth: '1320px', display: 'flex', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: { xs: 'center', md: 'stretch' } }} >
                <Box 
                    className="card" 
                    sx={{
                        padding: '20px',
                        border: '1px solid rgba(0, 0, 0, .125)',
                        borderRadius: '16px',
                        backgroundColor: primary_color_trans,
                        backdropFilter: 'blur(8px) !important',
                        boxShadow: '0 4px 5px 3px ' + accent_color_trans + ' !important',
                    }} 
                >
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }} sx={{margin:'20px', maxWidth: '600px'}}>
                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Primary Color: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <input onInput={HandlePrimaryColor} className="color_picker" style={{ display: 'inline' }} type="color" value={PrimaryColor} />
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Secondary Color: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <input onInput={HandleSecondaryColor} className="color_picker" style={{ display: 'inline' }} type="color" value={SecondaryColor} />
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Third Color: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <input onInput={HandleThirdColor} className="color_picker" style={{ display: 'inline' }} type="color" value={ThirdColor} />
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Accent Color: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <input onInput={HandleAccentColor} className="color_picker" style={{ display: 'inline' }} type="color" value={AccentColor} />
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' }}>Presets: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item" id="sel-menu">


                            <Select
                                className="mySelect"
                                labelId=""
                                id=""
                                value={PresetName}
                                label=""
                                onChange={HandlePresets}
                                keepMounted
                            >

                           
                                <MenuItem className="MenuItemItem" value=""></MenuItem>
                                <MenuItem className="MenuItemItem" value="Jedi">Jedi</MenuItem>
                                <MenuItem className="MenuItemItem" value="Ravens">Ravens</MenuItem>
                                <MenuItem className="MenuItemItem" value="Sith">Sith</MenuItem>
                                <MenuItem className="MenuItemItem" value="Xbox">Xbox</MenuItem>
                       
                            </Select>



                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}