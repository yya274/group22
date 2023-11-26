import React, { useState } from "react";
import { Typography, Container, Button, Grid } from "@mui/material";

export default function Meeting() {
    const meetingLogs = [
        { id: 1, title: "Meeting Log 1", url: "https://drive.google.com/uc?id=1KvyhgqL3oqcZkf4g6j7kXIT2O8q1bVTr" },
        { id: 2, title: "Meeting Log 2", url: "https://drive.google.com/uc?id=1KvyhgqL3oqcZkf4g6j7kXIT2O8q1bVTr" },
        { id: 3, title: "Meeting Log 3", url: "/meeting/3" },
        { id: 4, title: "Meeting Log 4", url: "/meeting/4" },
        { id: 5, title: "Meeting Log 5", url: "/meeting/5" },
        { id: 6, title: "Meeting Log 6", url: "/meeting/6" },
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