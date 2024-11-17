import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Slider from '@mui/material/Slider';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import Backgrounds from './Backgrounds';
import ReactDOMServer from 'react-dom/server';



function hexToRgba(hex, alpha) {
    // Remove the hash symbol if it's there
    hex = hex.replace(/^#/, '');
    
    let r, g, b, a;

    if (hex.length === 8) {
        // 8-digit hex with alpha (like #RRGGBBAA)
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
        a = parseInt(hex.slice(6, 8), 16) / 255;
    } else if (hex.length === 6) {
        // 6-digit hex without alpha (like #RRGGBB)
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
        a = alpha !== undefined ? alpha : 1;
    } else if (hex.length === 3) {
        // 3-digit shorthand hex (like #RGB)
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
        a = alpha !== undefined ? alpha : 1;
    } else {
        throw new Error("Invalid hex format");
    }

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}


function rgbaToHex(rgba) {
    let sep = rgba.indexOf(",") > -1 ? "," : " "; 
    rgba = rgba.substr(5).split(")")[0].split(sep);
  
    // Convert rgba values to 0-255 range
    for (let R in rgba) {
      let r = rgba[R];
      if (r.indexOf("%") > -1) {
        let p = r.substr(0, r.length - 1) / 100;
        if (R < 3) {
          rgba[R] = Math.round(p * 255);
        } else {
          rgba[R] = p;
        }
      }
    }
  
    let r = (+rgba[0]).toString(16),
      g = (+rgba[1]).toString(16),
      b = (+rgba[2]).toString(16),
      a = Math.round(+rgba[3] * 255).toString(16);
  
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
    if (a.length === 1) a = "0" + a;
  
    return "#" + r + g + b + a;
  }


export default function Misc()
{
    let style = getComputedStyle(document.body);
    let primary_color = style.getPropertyValue('--primary_color');
    let secondary_color = style.getPropertyValue('--secondary_color');
    let third_color = style.getPropertyValue('--third_color');
    let accent_color = style.getPropertyValue('--accent_color');


    let trans = style.getPropertyValue('--trans');
    let primary_color_trans = style.getPropertyValue('--primary_color') + trans;
    let accent_color_trans = style.getPropertyValue('--accent_color') + "26";

    


    let preset_name = localStorage.getItem("preset_name");

    if(preset_name == null)
    {
        preset_name = "";
    }

    let background_name = localStorage.getItem("background_name");

    if(background_name == null)
    {
        background_name = "triangles";
    }




    const [PrimaryColor, setPrimaryColor] = useState(primary_color);
    const [SecondaryColor, setSecondaryColor] = useState(secondary_color);
    const [ThirdColor, setThirdColor] = useState(third_color);
    const [AccentColor, setAccentColor] = useState(accent_color);
    const [PresetName, setPresetName] = useState(preset_name);
    const [BackgroundName, setBackgroundName] = useState(background_name);
    const [mytrans, setTrans] = useState(trans);

    function HandlePrimaryColor(event) {
        SetColor(event.target.value,null,null,null,null);
    }
    function HandleSecondaryColor(event) {
        SetColor(null,event.target.value,null,null,null);
    }
    function HandleThirdColor(event) {
        SetColor(null,null,event.target.value,null,null);
    }
    function HandleAccentColor(event) {
        SetColor(null,null,null,event.target.value,null);
    }
    function HandleTrans(event)
    {
        let value = event.target.value / 100;
        let hex = rgbaToHex(`rgba(0,0,0,${value})`).slice(-2);
        SetColor(null,null,null,null, hex);
    }

    function SetColor(p = null, s = null, t = null, a = null, x = null)
    {
            if(p)
            {
                localStorage.setItem("primary_color", p);
                document.documentElement.style.setProperty("--primary_color", p);
                setPrimaryColor(p);

                primary_color_trans = p + mytrans;
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

                accent_color_trans = a + "26";
            }
            if(x)
            {
                
                localStorage.setItem("trans", x);
                document.documentElement.style.setProperty("--trans", x);
                setTrans(x);
                

                primary_color_trans = PrimaryColor + x;
            }
            if(p == null || s == null || t == null || a == null)
            {
                localStorage.setItem("preset_name", "");
                setPresetName("");
            }

            //document.getElementById("tehhead").style.setProperty("background-color", PrimaryColor + mytrans, "important");
            //document.getElementById("tehfoot").style.setProperty("background-color", PrimaryColor + mytrans, "important");
    }

    function setBackground(primary_color,secondary_color,third_color,accent_color,background_name)
    {
        /*
        document.getElementById("svg_rec").setAttribute("fill",secondary_color);
        document.getElementById("stop_zero").setAttribute("stop-color",secondary_color);
        document.getElementById("stop_one").setAttribute("stop-color",primary_color);
    
        let svg = document.getElementById("svgBackground");
        let background = '<svg id="svgBackground" xmlns="http://www.w3.org/2000/svg" width="100%">' + svg.innerHTML + '</svg>';
        let encoded = window.btoa(background);
        document.body.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
        */
        

        const htmlString = ReactDOMServer.renderToString(<Backgrounds primary_color={primary_color} secondary_color={secondary_color} third_color={third_color} accent_color={accent_color} name={background_name}/>);
        let encoded = window.btoa(htmlString);
        document.body.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
  
    }

    function HandleBackgrounds(event)
    {
        
        setBackgroundName(event.target.value);
        localStorage.setItem("background_name", event.target.value);
        
        setPresetName("");
        localStorage.setItem("preset_name", "");
    }


    function HandlePresets(event)
    {
        if(event.target.value == "Jedi")
        {
            SetColor("#212227","#606060","#ebebeb","#4b8cc8","a6");
            setBackgroundName("republic");
            localStorage.setItem("background_name", "republic");
        }
        else if(event.target.value == "Ravens")
        {
            SetColor("#000000","#241773","#ebebeb","#9E7C0C","66");
            setBackgroundName("diamonds");
            localStorage.setItem("background_name", "diamonds");
        }
        else if(event.target.value == "Sith")
        {
            SetColor("#000000","#454545","#dfdfdf","#ff0000","33");
            setBackgroundName("empire");
            localStorage.setItem("background_name", "empire");
        }
        else if(event.target.value == "Xbox")
        {
            SetColor("#231F20","#6B6B6B","#FFFFFF","#30CE3B","78");
            setBackgroundName("triangles");
            localStorage.setItem("background_name", "triangles");
        }
        else if(event.target.value == "Light")
        {
            SetColor("#FFEDC7","#949494","#000000","#9D0C0C","bf");
            setBackgroundName("clean");
            localStorage.setItem("background_name", "clean");
        }

        localStorage.setItem("preset_name", event.target.value);
        setPresetName(event.target.value);
    }
    
    useEffect(() => {
        setBackground(PrimaryColor,SecondaryColor,ThirdColor,AccentColor,BackgroundName);
    }, [PrimaryColor,SecondaryColor,ThirdColor,AccentColor,BackgroundName]);

 
    useEffect(() => {
        document.getElementById("tehhead").style.setProperty("background-color", PrimaryColor + mytrans, "important");
        document.getElementById("tehfoot").style.setProperty("background-color", PrimaryColor + mytrans, "important");
    },[PrimaryColor, mytrans]);
    
    

    let rgba = hexToRgba("#000000" + mytrans);
    let lastc = rgba.lastIndexOf(",") + 1;
    let lastp = rgba.lastIndexOf(")");
    let ret = rgba.slice(lastc,lastp).trim();
    //console.log(Math.round(parseFloat(ret) * 100));
    let sliderVal = parseInt(Math.round(parseFloat(ret) * 100));




    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Box sx={{ padding: '20px' }} >
                <Typography variant="h4" sx={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>Random </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color) !important', textShadow: '2px 2px var(--primary_color) !important' }} >Stuff</Typography>
                <Typography variant="subtitle1" sx={{textShadow: '2px 2px var(--primary_color) !important'}}>Some fun customization options.</Typography>
            </Box>
            <Box sx={{ maxWidth: '1320px', display: 'flex', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: { xs: 'center', md: 'stretch' } }} >
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
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }} sx={{margin:'20px', maxWidth: '600px'}}>
                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>Primary Color: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <input onInput={HandlePrimaryColor} className="color_picker" style={{ display: 'inline', border: '2px solid var(--secondary_color)' }} type="color" value={PrimaryColor} />
                        </Grid>

                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline' ,textShadow: '2px 2px var(--primary_color) !important'}}>Secondary Color: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <input onInput={HandleSecondaryColor} className="color_picker" style={{ display: 'inline', border: '2px solid var(--primary_color)' }} type="color" value={SecondaryColor} />
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>Third Color: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <input onInput={HandleThirdColor} className="color_picker" style={{ display: 'inline', border: '2px solid var(--secondary_color)' }} type="color" value={ThirdColor} />
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>Accent Color: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                                <input onInput={HandleAccentColor} className="color_picker" style={{ display: 'inline', border: '2px solid var(--secondary_color)' }} type="color" value={AccentColor} />
                        </Grid>

                        <Grid size={6} className="grid_cell_item">
                            <Typography variant="subtitle1" style={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>Transparency: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item">
                            <Slider value={sliderVal} onChange={HandleTrans} valueLabelDisplay="auto" sx={{ width: '50%', color:'var(--secondary_color)' }} />
                        </Grid>

                        <Grid size={6} className="grid_cell_item" >
                            <Typography variant="subtitle1" style={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>Background: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item" >


                        <Select
                                className="mySelect"
                                inputProps={{
                                    MenuProps: {
                                        PaperProps: {
                                            sx: {
                                                backgroundColor: primary_color_trans + ' !important',
                                                backdropFilter: 'blur(2px) !important',
                                                borderRadius: '18px !important',
                                            }
                                        }

                                    }
                                }}
                                labelId=""
                                id="tehselect"
                                value={BackgroundName}
                                label=""
                                onChange={HandleBackgrounds}
                                sx={{
                                    "& .MuiSvgIcon-root": {
                                    color: 'var(--secondary_color)',
                                    }
                                }}
                            >
                            
                                <MenuItem className="MenuItemItem" value="triangles">Triangles</MenuItem>
                                <MenuItem className="MenuItemItem" value="diamonds">Diamonds</MenuItem>
                                
                                <MenuItem className="MenuItemItem" value="empire">Empire</MenuItem>
                                <MenuItem className="MenuItemItem" value="republic">Republic</MenuItem>
                                <MenuItem className="MenuItemItem" value="clean">Clean</MenuItem>
                                
                            </Select>





                        </Grid>




                        <Grid size={6} className="grid_cell_item">
                                <Typography variant="subtitle1" style={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>Theme Presets: </Typography>
                        </Grid>
                        <Grid size={6} className="grid_cell_item" id="sel-menu">


                            <Select
                                className="mySelect"
                                inputProps={{
                                    MenuProps: {
                                        PaperProps: {
                                            sx: {
                                                backgroundColor: primary_color_trans + ' !important',
                                                backdropFilter: 'blur(2px) !important',
                                                borderRadius: '18px !important',
                                            }
                                        }

                                    }
                                }}
                                labelId=""
                                id="tehselect"
                                value={PresetName}
                                label=""
                                onChange={HandlePresets}
                                sx={{
                                    "& .MuiSvgIcon-root": {
                                    color: 'var(--secondary_color)',
                                    }
                                }}
                            >

                           
                                
                                <MenuItem className="MenuItemItem" value="Jedi">Jedi</MenuItem>
                                <MenuItem className="MenuItemItem" value="Light">Light</MenuItem>
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