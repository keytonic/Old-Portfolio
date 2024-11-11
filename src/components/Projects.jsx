import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProjectsData from "../../public/projects/projectsdata";
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
//import Container from '@mui/material/Container';



function Projects()
{
    let primary_color = localStorage.getItem("primary_color");
    let accent_color = localStorage.getItem("accent_color");

    if(primary_color == null) primary_color = getComputedStyle(document.body).getPropertyValue('--primary_color');
    if(primary_color == null) accent_color = getComputedStyle(document.body).getPropertyValue('--accent_color');
    
    let accent_color_trans = accent_color + "26";
    let primary_color_trans = primary_color + "70";

    function ShowButtons(parms) {
        return (
            <>
                {parms.demo ? <Button variant="outlined" startIcon={<RocketLaunchIcon />} onClick={() => { setTimeout(`window.open('${parms.demo}', '_blank');`, 1000); }}>Demo</Button> : ""}
                {parms.github ? <Button variant="outlined" startIcon={<GitHubIcon />} onClick={() => { setTimeout(`window.open('${parms.github}', '_blank');`, 1000); }}>GitHub</Button> : ""}
            </>
        );
    }
    
    
    function ShowProjects() {
        const Ret = ProjectsData.map((project, i) => {
            if (project.hidden != true) {
                return (
                    <Box
                        key={i}
                        className="card"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: '350px',
                            margin: '10px',
                            marginTop: '20px',
                            gap: '20px',
                            border: '1px solid rgba(0, 0, 0, .125)',
                            borderRadius: '16px',

                            backgroundColor: primary_color_trans,
                            backdropFilter: 'blur(8px) !important',
                            boxShadow: '0 4px 5px 3px ' + accent_color_trans + ' !important',
                        }}
                    >
                        <Box
                            component="img"
    
                            sx={{
                                height: 233,
                                width: 350,
                                maxHeight: 167,
                                maxWidth: 250,
                                marginTop: '30px',
                                borderRadius: '16px',
                            }}
                            src={project.picture}
                        />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'var(--accent_color)',textShadow: '2px 2px var(--primary_color)' }}>{project.title}</Typography>
                        </Box>
                        <Box>
    
                            <Typography variant="subtitle1" sx={{ paddingLeft: '20px', paddingRight: '20px', textAlign: 'justify' }}>{project.description}</Typography>
                        </Box>
                        <Box sx={{ marginBottom: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', height: '100%', gap: '20px' }}>
                            <ShowButtons github={project.github} demo={project.demo} />
                        </Box>
                    </Box>
                );
            }
            return "";
        });
    
        return Ret;
    }



    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',alignItems: 'center' }}>
            <Box sx={{ padding: '20px' }} >
                <Typography variant="h4" sx={{ display: 'inline' }}>My Recent </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color)', textShadow: '2px 2px var(--primary_color)'}} >Works</Typography>
                <Typography variant="subtitle1">Here are a few of my recent projects.</Typography>
            </Box>
            <Box sx={{ maxWidth: '1320px', display: 'flex', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: { xs: 'center', md: 'stretch' } }} >
                
                    <ShowProjects />
            
            </Box>
        </Box>
    );
}

export default Projects;