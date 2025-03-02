import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import projectImg from "../images/project-thumbnail.png";

const projects = [
  { title: "AI Music Genre Classifier", description: "Deep Learning for music genre prediction.", link: "#" },
  { title: "Vector Database for Retrieval", description: "Large-scale passage retrieval system.", link: "#" },
  { title: "Generative AI Chatbot", description: "Finance AI chatbot using LLMs.", link: "#" }
];

const Projects: React.FC = () => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
      {projects.map((project, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card className="project-card">
            <CardContent>
              <img src={projectImg} alt="Project" style={{ width: "100%", borderRadius: "8px" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>{project.title}</Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
