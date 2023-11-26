import React, { useState } from "react";
import { Typography, Container, Button, Grid } from "@mui/material";

export default function Meeting() {
    const meetingLogs = [
        { id: 1, title: "Meeting Log 1", url: "https://drive.google.com/uc?id=1ZzH9GZ061vbWLvOsUnxTLmEpSqaKyQ3k" },
        { id: 2, title: "Meeting Log 2", url: "https://drive.google.com/uc?id=1SajFgyUqH5bQu5pGWeQG14FWQdExoymG" },
        { id: 3, title: "Meeting Log 3", url: "https://drive.google.com/uc?id=1kJ_nRGCiWvNFSMZH34dsY1cekDg2vKNG" },
        { id: 4, title: "Meeting Log 4", url: "https://drive.google.com/uc?id=1SDS-g6_95a4QvMUp_URYKi0KwCbbLh3b" },
        { id: 5, title: "Meeting Log 5", url: "https://drive.google.com/uc?id=1Ps9Cmd0g9eErfLCy7ybLc-7MVpfxbepn" },
        { id: 6, title: "Meeting Log 6", url: "https://drive.google.com/uc?id=1HbM3ZYzHJ8JXFWGPO2jw-a22Gs7z-Mgn" },
        { id: 7, title: "Meeting Log 7", url: "https://drive.google.com/uc?id=10h0VWU0jLbLK0yE-AAcTy_MhHvT7YVg1" },
        { id: 8, title: "Meeting Log 8", url: "https://drive.google.com/uc?id=1hBq_I0FIyYqlkWgn1v3TIe3u_C9XbaTO" },
    ];

    const [selectedLog, setSelectedLog] = useState(meetingLogs[0]);

    const handleLogClick = (log) => {
        setSelectedLog(log);
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Group Meeting Log</Typography>

            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {meetingLogs.map((log) => (
                    <Grid item xs={6} key={log.id}>
                        <Button variant="outlined" color="primary" fullWidth style={{ borderRadius: 16 }} onClick={() => handleLogClick(log)} >
                            {log.title}
                        </Button>
                    </Grid>
                ))}
            </Grid>

            <iframe title="PDF Viewer" src={selectedLog.url} style={{ width: "100%", height: "80vh", border: "none", marginTop: "1rem" }} />
        </Container>
    );
};