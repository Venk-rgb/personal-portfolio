import React from "react";
import { Typography, Container } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="body1">
        I'm a Master's student in Computer Science at NYU with a strong background in software engineering and data science. 
        My expertise includes machine learning, full-stack web development, and cloud computing.
      </Typography>
    </Container>
  );
};

export default About;
