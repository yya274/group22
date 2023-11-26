import React from "react";
import { Typography, Container } from "@mui/material";

export default function Rule() {
    const pdfUrl = "https://drive.google.com/uc?id=1akzVUmyqqpVUhlTOjKU3oqlNNAj_MdVS";

    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Rule Book</Typography>
            <iframe title="PDF Viewer" src={pdfUrl} style={{ width: "100%", height: "80vh", border: "none", marginTop: "1rem" }} />
        </Container>
    );
}
