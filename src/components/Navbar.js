import React from "react";
import { AppBar, Typography, Toolbar, Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {


    const location = useLocation();
    const linkstyle = {
        margin: "1rem",
        textDecoration: "none",
        color: "white",
        fontSize: "small",
        fontWeight: "bold",
        transition: "color 0.3s, background-color 0.3s",
        '&:hover': {
            color: "black",
            backgroundColor: "white",
        },
    };

    const activeLinkStyle = {
        backgroundColor: "white",
        color: "black",
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ marginRight: "2rem" }}>IAT 210 Group 22</Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="right">
                        <Button component={Link} to="/" sx={{ ...linkstyle, ...(location.pathname === '/' && activeLinkStyle) }} >Home</Button>
                        <Button component={Link} to="/story" sx={{ ...linkstyle, ...(location.pathname === '/story' && activeLinkStyle) }}>Backstory</Button>
                        <Button component={Link} to="/gallery" sx={{ ...linkstyle, ...(location.pathname === '/gallery' && activeLinkStyle) }}>Visual Gallery</Button>
                        <Button component={Link} to="/rule" sx={{ ...linkstyle, ...(location.pathname === '/rule' && activeLinkStyle) }}>Rule Book</Button>
                        <Button component={Link} to="/analyses" sx={{ ...linkstyle, ...(location.pathname === '/analyses' && activeLinkStyle) }}>Analyses</Button>
                        <Button component={Link} to="/meeting" sx={{ ...linkstyle, ...(location.pathname === '/meeting' && activeLinkStyle) }}>Meeting Log</Button>
                        <Button component={Link} to="/contributions" sx={{ ...linkstyle, ...(location.pathname === '/contributions' && activeLinkStyle) }}>Contributions</Button>
                        <Button component={Link} to="/references" sx={{ ...linkstyle, ...(location.pathname === '/references' && activeLinkStyle) }}>References</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
