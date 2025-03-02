import React from "react";
import { Typography, Card, CardContent, Avatar, Box, Grid } from "@mui/material";
import profilePic from "../images/passport_style_photo.jpg";

const About: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Card sx={{ width: "60%", padding: 3, textAlign: "center" }}>
        <Avatar src={profilePic} sx={{ width: 120, height: 120, margin: "auto" }} />
        <CardContent>
          <Typography variant="h4" gutterBottom>About Me</Typography>
          <Typography variant="body1">
            I'm a Masters student at New York University, passionate about software engineering and data engineering.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Skills:</Typography>
          <Grid container spacing={1} justifyContent="center">
            {["Python", "SQL", "React", "AWS", "Machine Learning"].map((skill) => (
              <Grid item key={skill}>
                <Box sx={{ background: "#2c3e50", color: "white", padding: "5px 15px", borderRadius: "20px" }}>
                  {skill}
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
