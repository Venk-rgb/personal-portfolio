import React from "react";
import { Typography, Container, Card, CardContent } from "@mui/material";

const projects = [
  { title: "Player Performance Tracker", description: "A JavaFX-based cricket player tracking system using MySQL." },
  { title: "Generative AI for Finance", description: "Developed a financial query system using LLMs." },
  { title: "Vector Database for Passage Retrieval", description: "Implemented a large-scale vector DB for efficient passage retrieval." }
];

const Projects: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      {projects.map((project, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2">{project.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
