import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GitHubCalendar from 'react-github-calendar';
//https://grubersjoe.github.io/react-github-calendar
//https://www.npmjs.com/package/react-github-calendar
import useMediaQuery from '@mui/material/useMediaQuery';


import Icons from './Icons';


export default function Skills()
{
    let style = getComputedStyle(document.body);
    let trans = style.getPropertyValue('--trans');
    let primary_color_trans = style.getPropertyValue('--primary_color') + trans;
    let accent_color_trans = style.getPropertyValue('--accent_color') + "26";

    const sm = useMediaQuery('(min-width:950px)');
    const xs = useMediaQuery('(min-width:600px)');
    let countStr = '';


        if (xs == false)
        {
            countStr = '{{count}} activities in the last four months'
        }
        else if (sm == false)
        {
            countStr = '{{count}} activities in the last eight months';
        }
        else
        {
            countStr = '{{count}} activities in the last year';
        }



    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        let shownMonths = 12;

        if (xs == false)
        {
            shownMonths = 4;
        }
        else if (sm == false)
        {
            shownMonths = 8;
        }
      
        return contributions.filter(activity => {
          const date = new Date(activity.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };


    const ghTheme = {
        light: [style.getPropertyValue('--primary_color') + "d4", style.getPropertyValue('--accent_color') + "d4"],
        dark: [style.getPropertyValue('--primary_color') + "d4", style.getPropertyValue('--accent_color') + "d4"]
    };


    
    return (
        <div>
            

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>

                <Box sx={{ padding: '20px' }} >
                    <Typography variant="h4" sx={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>My </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)' }} >skillset</Typography>
                    <Typography variant="subtitle1" sx={{textShadow: '2px 2px var(--primary_color) !important'}}>Subtitle blah blah blah</Typography>
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
                                display: 'flex',
                                gap: '20px',
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }} 
                        >
                            
                            <Icons show="react" link="https://react.dev" />
                            <Icons show="html" link="https://www.w3schools.com/html" />
                            <Icons show="js" link="https://www.w3schools.com/js" />
                            <Icons show="css" link="https://www.w3schools.com/css" />
                            <Icons show="java" link="https://www.java.com" />
                            <Icons show="php" link="https://www.php.net" />
                            <Icons show="mysql" link="https://www.mysql.com" />
                            <Icons show="cpp" link="https://isocpp.org" />
                            <Icons show="python" link="https://www.python.org" />
                        </Box>
                    </Box>




                <Box sx={{ padding: '20px' }} >
                    <Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)' }} >Tools </Typography><Typography variant="h4" sx={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>i use</Typography>
                    <Typography variant="subtitle1" sx={{textShadow: '2px 2px var(--primary_color) !important'}}>Subtitle blah blah blah</Typography>
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
                                display: 'flex',
                                gap: '20px',
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }} 
                        >
                            <Icons show="vscode" link="https://code.visualstudio.com" />
                            <Icons show="git" link="https://git-scm.com" />
                            <Icons show="nodejs" link="https://nodejs.org" />
                            <Icons show="firebase" link="https://firebase.google.com/" />
                            <Icons show="linux" link="https://www.kernel.org" />
                            <Icons show="mxlinux" link="https://mxlinux.org" />
                            <Icons show="photoshop" link="https://www.adobe.com/apps/all/all-platforms/pdp/photoshop" />
                            <Icons show="gimp" link="https://www.gimp.org" />
                            <Icons show="classicpress" link="https://www.classicpress.net" />

                        </Box>
                    </Box>

                <Box sx={{ padding: '20px' }} >
                    <Typography variant="h4" sx={{ display: 'inline',textShadow: '2px 2px var(--primary_color) !important' }}>Days i </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)' }} >code</Typography>
                    <Typography variant="subtitle1" sx={{textShadow: '2px 2px var(--primary_color) !important'}}>Subtitle blah blah blah</Typography>
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
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'max-content', gap: '8px' }}>
                                <Typography variant="caption" sx={{ display: 'flex', width: '100%',textShadow: '2px 2px var(--primary_color) !important' }}>@keytonic on GitHub</Typography>
                                <GitHubCalendar 
                                    username="keytonic" 
                                    theme={ghTheme} 
                                    hideColorLegend={xs == false ? true : false}
                                    transformData={xs == false || sm == false ? selectLastHalfYear : ""}
                                    labels={{ totalCount: countStr}}
                                    style={{textShadow: '2px 2px var(--primary_color) !important'}}
                                />
                                
                            </Box>


                        </Box>
                    </Box>




            </Box>



        </div>
    );
}