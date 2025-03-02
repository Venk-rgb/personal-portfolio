import React from "react";
import { Container, Typography, Avatar, Grid, Paper } from "@mui/material";
import profilePic from "../images/passport_style_photo.jpg";

const About: React.FC = () => {
  return (
    <Container sx={{ mt: 5, textAlign: 'center' }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Avatar src={profilePic} sx={{ width: 200, height: 200, margin: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 3, background: "#f5f5f5", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">
              I am a passionate Software Engineer and Data Enthusiast, currently completing my Master's at NYU. My experience spans AI, Machine Learning, and Full-Stack Development. I thrive in creating intelligent solutions that transform data into actionable insights.
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>Tech Stack:</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
              Python | SQL | React | AWS | Machine Learning | Big Data
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>Fun Facts:</Typography>
            <Typography variant="body2">
              🎵 Music enthusiast with a knack for AI-driven music analytics. <br/>
              📈 Loves working with real-world financial datasets. <br/>
              ☕ Can debug faster with a cup of coffee!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;