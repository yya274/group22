import React from "react";
import { Typography, Container } from "@mui/material";

export default function Flowchart() {
    const pdfUrl = "https://drive.google.com/uc?id=1sTVEz6-9NEN6K0rfINJuUzmHPAPnSB1v";
    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Flowchart</Typography>
            <iframe title="PDF Viewer" src={pdfUrl} style={{ width: "100%", height: "80vh", border: "none", marginTop: "1rem" }} />
        </Container>
    )
}