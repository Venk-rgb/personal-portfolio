import React from "react";
import { Typography, Button, Box } from "@mui/material";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <Box className="hero">
      <Typography variant="h3">Hi, I'm Venkataramanan Venkateswaran</Typography>
      <Typography className="software-title" variant="h5">Software Engineer | Data Enthusiast</Typography>
      <Button variant="contained" color="primary" href="/projects" sx={{ mt: 2 }}>
        View My Work
      </Button>
    </Box>
  );
};

export default Home;
