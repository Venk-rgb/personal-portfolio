import React from "react";
import { Typography, Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to My Portfolio</Typography>
      <Typography variant="body1">I am Venkataramanan Venkateswaran, a passionate software engineer specializing in data science, machine learning, and full-stack development.</Typography>
    </Container>
  );
};

export default Home;
