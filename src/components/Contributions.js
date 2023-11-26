import React from "react";
import { Typography, Container, Paper, Grid } from "@mui/material";

export default function Contributions() {

    const works = [
        {
            id: 1,
            name: "Visual Gallery",
            contributor: "XXXX (xx%)\nXXXX (XX%)\nXXXX (XX%)",
        },
        {
            id: 2,
            name: "Website",
            contributor: "XXX (xx%)",
        },
        {
            id: 3,
            name: "Backstory",
            contributor: "XXX (xx%)",
        },
        {
            id: 4,
            name: "Trailer",
            contributor: "XXX (xx%)",
        },
        {
            id: 5,
            name: "Rule Book",
            contributor: "XXX (xx%)",
        },
        {
            id: 6,
            name: "Quantitative Analysis",
            contributor: "XXX (xx%)",
        }
    ]

    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Contributions</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "5rem" }}>
                {works.map((work) => (
                    <Grid item xs={3} key={work.id}>
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