import React from "react";
import { Typography, Container, Grid } from "@mui/material";
const importAll = (context) => context.keys().map(context);

const boardUrl = importAll(require.context('./cards/board', false, /\.(png|jpe?g|svg)$/));
const diceUrl = importAll(require.context('./cards/dice', false, /\.(png|jpe?g|svg)$/));
const eventUrl = importAll(require.context('./cards/event', false, /\.(png|jpe?g|svg)$/));
const powerupUrl = importAll(require.context('./cards/powerup', false, /\.(png|jpe?g|svg)$/));
const mageUrl = importAll(require.context('./cards/mage', false, /\.(png|jpe?g|svg)$/));
const mageUrlB = importAll(require.context('./cards/mage/basic', false, /\.(png|jpe?g|svg)$/));
const mageUrlL = importAll(require.context('./cards/mage/legendary', false, /\.(png|jpe?g|svg)$/));
const knightUrl = importAll(require.context('./cards/knight', false, /\.(png|jpe?g|svg)$/));
const knightUrlB = importAll(require.context('./cards/knight/basic', false, /\.(png|jpe?g|svg)$/));
const knightUrlL = importAll(require.context('./cards/knight/legendary', false, /\.(png|jpe?g|svg)$/));
const ninjaUrl = importAll(require.context('./cards/ninja', false, /\.(png|jpe?g|svg)$/));
const ninjaUrlB = importAll(require.context('./cards/ninja/basic', false, /\.(png|jpe?g|svg)$/));
const ninjaUrlL = importAll(require.context('./cards/ninja/legendary', false, /\.(png|jpe?g|svg)$/));
const jestUrl = importAll(require.context('./cards/jester', false, /\.(png|jpe?g|svg)$/));
const jesterUrlB = importAll(require.context('./cards/jester/basic', false, /\.(png|jpe?g|svg)$/));
const jesterUrlL = importAll(require.context('./cards/jester/legendary', false, /\.(png|jpe?g|svg)$/));
const bossUrlF = importAll(require.context('./cards/boss/final', false, /\.(png|jpe?g|svg)$/));
const bossUrlE = importAll(require.context('./cards/boss/easy', false, /\.(png|jpe?g|svg)$/));
const bossUrlM = importAll(require.context('./cards/boss/med', false, /\.(png|jpe?g|svg)$/));
const bossUrlH = importAll(require.context('./cards/boss/hard', false, /\.(png|jpe?g|svg)$/));


export default function Gallery() {

    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Game Board</Typography>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <img src={boardUrl} alt="Game Board" style={{ maxWidth: "75%", height: "auto" }} />
            </div>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Dice</Typography>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <img src={diceUrl} alt="Game Board" style={{ maxWidth: "75%", height: "auto" }} />
            </div>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Event Cards</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {eventUrl.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Power-Up Cards</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {powerupUrl.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Power-Up Cards</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {powerupUrl.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Classes</Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem" }}>Mage</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {mageUrl.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textDecorationLine: "underline" }}>Basic Skill</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {mageUrlB.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textDecorationLine: "underline" }}>Legendary Skill</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {mageUrlL.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" component="h1" style={{ marginTop: "2rem" }}>Knight</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {knightUrl.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textDecorationLine: "underline" }}>Basic Skill</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {knightUrlB.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textDecorationLine: "underline" }}>Legendary Skill</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {knightUrlL.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" component="h1" style={{ marginTop: "2rem" }}>Ninja</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {ninjaUrl.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textDecorationLine: "underline" }}>Basic Skill</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {ninjaUrlB.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textDecorationLine: "underline" }}>Legendary Skill</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {ninjaUrlL.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem" }}>Jester</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {jestUrl.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textDecorationLine: "underline" }}>Basic Skill</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {jesterUrlB.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textDecorationLine: "underline" }}>Legendary Skill</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {jesterUrlL.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Boss</Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem" }}>Easy</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {bossUrlE.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" component="h1" style={{ marginTop: "2rem" }}>Medium</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {bossUrlM.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>


            <Typography variant="h6" component="h1" style={{ marginTop: "2rem" }}>Hard</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {bossUrlH.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" component="h1" style={{ marginTop: "2rem" }}>Final Boss</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "1rem" }}>
                {bossUrlF.map((card, index) => (
                    <Grid item xs={2} key={index}>
                        <img
                            src={card}
                            alt={index}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}