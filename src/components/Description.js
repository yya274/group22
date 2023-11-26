import React from "react";
import { Typography, Container } from "@mui/material";

export default function Description() {
    return (
        <Container>
            <Typography variant="h4" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Descriptions</Typography>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Game Dynamics</Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Probability</Typography>
            <Typography variant="body1" component="p"  >
                The probability of rolling a specific number on the dice determines how far a player can move on the board. The probability of drawing event cards and power-up cards from the deck introduces an element of chance in the game.Probability can influence the outcomes of boss battles, especially if certain skills or effects depend on dice rolls.
            </Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Strategy</Typography>
            <Typography variant="body1" component="p"  >
                Players make choices regarding skill specialisation within their chosen class, deciding whether to focus on certain types of skills or diversify to handle a broader range of challenges.
            </Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Inventory</Typography>
            <Typography variant="body1" component="p"  >
                Players strategically deploy power-up cards based on the current situation. Managing these resources effectively becomes crucial, especially when facing challenging encounters or unexpected events.
            </Typography>

            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Boss Fighting</Typography>
            <Typography variant="body1" component="p"  >
                Each boss has unique abilities and attack patterns that players must learn and adapt to during fights.
            </Typography>

            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>PVP</Typography>
            <Typography variant="body1" component="p"  >
                PvP creates opportunities for direct player interaction and competition, fostering engagement and strategic thinking. The winner gains the opportunity to steal a power-up card from the losing player.
            </Typography>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Trade-Off</Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Skill Cooldown</Typography>
            <Typography variant="body1" component="p"  >
                Using powerful skills in one turn may result in extended cooldowns, limiting their availability in subsequent turns.
            </Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Resource Allocation</Typography>
            <Typography variant="body1" component="p"  >
                Players must decide when to use power-up cards, balancing short-term advantages with the need for resources during more challenging battles.
            </Typography>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Dilemma</Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Skill Choice</Typography>
            <Typography variant="body1" component="p"  >
                Players must decide how to build their class skills wisely against the current state of the game, and the challenges ahead.
                <br></br><br></br>
            </Typography>

        </Container>
    )
}