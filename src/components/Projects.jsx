import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProjectsData from "../../public/projects/projectsdata";
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function ShowButtons(parms) {
    return (
        <>
            {parms.demo ? <Button color="#39D353" sx={{ color: '#39D353' }} variant="outlined" startIcon={<RocketLaunchIcon />} onClick={() => { setTimeout(`window.open('${parms.demo}', '_blank');`, 1000); }}>Demo</Button> : ""}
            {parms.github ? <Button color="#39D353" sx={{ color: '#39D353' }} variant="outlined" startIcon={<GitHubIcon />} onClick={() => { setTimeout(`window.open('${parms.github}', '_blank');`, 1000); }}>GitHub</Button> : ""}
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
                        borderRadius: '8px',
                        boxShadow: '0 4px 5px 3px rgba(57, 211, 83, 15%)',
                        backgroundColor: 'rgb(47 49 50 / 60%)',
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
                            borderRadius: '8px',
                        }}
                        src={project.picture}
                    />
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#39D353' }}>{project.title}</Typography>
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

const Projects = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Box sx={{ padding: '20px' }} >
            <Typography variant="h4" sx={{ display: 'inline' }}>My Recent </Typography><Typography variant="h4" sx={{ display: 'inline', color: '#39D353' }} >Works</Typography>
            <Typography variant="subtitle1">Here are a few projects I've recently worked on.</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: { xs: 'center', md: 'stretch' } }} >
            <ShowProjects />
        </Box>
    </Box>
);

export default Projects;