import React from "react";
import { Typography, Container, Paper, Grid } from "@mui/material";

export default function Contributions() {

    const works = [
        {
            id: 1,
            name: "Visual Gallery",
            contributor: "Banni (60%)\nAlice (40%)\n",
        },
        {
            id: 2,
            name: "Website",
            contributor: "Yuan (100%)",
        },
        {
            id: 3,
            name: "Backstory",
            contributor: "Gabriel (100%)",
        },
        {
            id: 4,
            name: "Trailer",
            contributor: "Gabriel (50%)\nAlice (50%)",
        },
        {
            id: 5,
            name: "Rule Book",
            contributor: "Gabriel (80%)\nYuan(20%)",
        },
        {
            id: 6,
            name: "Quantitative Analysis",
            contributor: "Deepjot (40%)\nGabriel (20%)\nYuan(40%)",
        },
        {
            id: 7,
            name: "Flowchart",
            contributor: "Deepjot (100%)",
        },
        {
            id: 8,
            name: "Playertesting Log",
            contributor: "Banni (20%)\nAlice (20%)\nGabreil (20%)\nDeepjot (20%)\nYuan (20%)",
        },
        {
            id: 9,
            name: "Game Dynamics",
            contributor: "Gabreil (90%)\nYuan (10%)",
        },
    ]

    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Contributions</Typography>
            <Grid container spacing={4} justifyContent="center" style={{ marginTop: "5rem" }}>
                {works.map((work) => (
                    <Grid item xs={4} key={work.id}>
                        <Paper style={{ height: "100%", textAlign: "center" }} elevation={3}>
                            <Typography variant="h6" component="div">
                                {work.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {work.contributor.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}