import React from "react";
import { Typography, Container, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Meeting() {
    const meetingLogs = [
        { id: 1, title: "Meeting Log 1", url: "/meeting/1" },
        { id: 2, title: "Meeting Log 2", url: "/meeting/2" },
        { id: 3, title: "Meeting Log 3", url: "/meeting/3" },
        { id: 4, title: "Meeting Log 4", url: "/meeting/4" },
        { id: 5, title: "Meeting Log 5", url: "/meeting/5" },
        { id: 6, title: "Meeting Log 6", url: "/meeting/6" },
    ];

    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Group Meeting Log</Typography>

            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "5rem" }}>
                {meetingLogs.map((log) => (
                    <Grid item xs={6} key={log.id}>
                        <Button component={Link} to={log.url} variant="outlined" color="primary" fullWidth style={{ borderRadius: 16 }} >
                            {log.title}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};