import React from "react";
import { Typography, Container } from "@mui/material";
const importAll = (context) => context.keys().map(context);
const boardUrl = importAll(require.context('./cards/board', false, /\.(png|jpe?g|svg)$/));
const videoUrl = "";


export default function Home() {
    return (
        <Container>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <img src={boardUrl} alt="Game Board" style={{ maxWidth: "75%", height: "auto" }} />
            </div>
            <Typography variant="h1" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>Kismet Of Chaos</Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "2rem", textAlign: "center" }}>
                Kismet of Chaos is a multiplayer strategy game where players compete against other players through building unique and powerful combinations of skills to be the first player to defeat The Great Demonic Warlord Kaus
            </Typography>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <iframe
                    title="Embedded Video"
                    width="560"
                    height="315"
                    src={videoUrl}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>



            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Inspirations</Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Dungeons & Dragons</Typography>
            <Typography variant="body1" component="p"  >
                The main idea of our game, a hero adventure with a focus on fighting bosses in mediaeval age, inspired by Dungeons & Dragons. By allowing players to choose from a variety of class-based heroes, each class has unique abilities and strengths. The concept of Ascension Levels can tie into the hero's growth and progression. As players defeat bosses, they ascend to higher levels, unlocking new skills, and facing more formidable challenges.
            </Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Monopoly</Typography>
            <Typography variant="body1" component="p"  >
                Event tiles can add unpredictability and excitement to the game, much like the Chance or Community Chest cards in Monopoly.
            </Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>World Of Warcraft</Typography>
            <Typography variant="body1" component="p"  >
                Status Ailment was drawing inspiration from World of Warcraft, which can add strategic depth and variety to the gameplay.
            </Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>League of Legends</Typography>
            <Typography variant="body1" component="p"  >
                League of Legends provides the inspiration of having one unique passive, three basic skills and one legendary skill for each class.
            </Typography>

            <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>Pillars</Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>What</Typography>
            <Typography variant="body1" component="p"  >
                Become powerful enough to be the first hero to defeat The Great Demonic Warlord Kaus.
            </Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>How</Typography>
            <Typography variant="body1" component="p"  >
                By defeating various bosses to obtain skills from them that allows you to Ascend to higher levels of strength, collecting power-ups along the way, and fighting against other players in combat to steal their power-ups.
            </Typography>
            <Typography variant="h6" component="h1" style={{ marginTop: "1rem" }}>Why</Typography>
            <Typography variant="body1" component="p"  >
                To achieve glory as the Legendary Hero that saved the Kingdom of Kismet from the tyranny of Kaus.
            </Typography>
            <br></br>
        </Container>
    )
}