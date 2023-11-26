import React, { useState } from "react";
import { Typography, Container, Grid, Button } from "@mui/material";

export default function Testing() {
    const testingLogs = [
        { id: 1, title: "Playtesting Log 1", url: "https://drive.google.com/uc?id=1SjQeS7yVreD9m6uPw9x1XkAOoZF5KqX3" },
        { id: 2, title: "Playtesting Log 2", url: "https://drive.google.com/uc?id=1x3rR5ImsQSwwuUE7C840GT0i-xVXg6vm" },
        { id: 3, title: "Playtesting Log 3", url: "https://drive.google.com/uc?id=1iytlF7VC7EAJKs3Jr969o-5EUPV09S6N" },
        { id: 4, title: "Playtesting Log 4", url: "https://drive.google.com/uc?id=1LxafSUEp-xNNuIK0SZWuNOmyPqpqUEQA" },
    ];

    const [selectedLog, setSelectedLog] = useState(testingLogs[0]);

    const handleLogClick = (log) => {
        setSelectedLog(log);
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Playtesting Log</Typography>

            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {testingLogs.map((log) => (
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
}