
import React from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
//import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import MyResume from '/resume.pdf';

export default function Resume() {
    let style = getComputedStyle(document.body);
    let trans = style.getPropertyValue('--trans');
    let primary_color_trans = style.getPropertyValue('--primary_color') + trans;
    let accent_color_trans = style.getPropertyValue('--accent_color') + "26";

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }} >
                <Box sx={{ padding: '20px' }} >
                    <Typography variant="h4" sx={{ display: 'inline', textShadow: '2px 2px var(--primary_color) !important' }}>My </Typography><Typography variant="h4" sx={{ display: 'inline', color: 'var(--accent_color) !important', textShadow: '2px 2px var(--primary_color) !important' }} >Resume</Typography>
                    <Typography variant="subtitle1" sx={{ textShadow: '2px 2px var(--primary_color) !important' }}>Curriculum Vitae</Typography>
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
                            xflexWrap: 'wrap',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Button variant="outlined" href={MyResume} target="_blank" startIcon={<DownloadIcon />} >Download</Button>

                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                            <div id="pdf" style={{ overflow: 'hidden' }}>
                                <Viewer fileUrl={MyResume}  />
                            </div>
                        </Worker>

                        <Button variant="outlined" href={MyResume} target="_blank" startIcon={<DownloadIcon />} >Download</Button>

                    </Box>
                </Box>
            </Box>
        </>
    );
}