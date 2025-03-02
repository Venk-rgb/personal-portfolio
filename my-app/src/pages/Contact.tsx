import React from "react";
import { Typography, TextField, Button, Container, Box } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Box className="contact-container">
      <Container sx={{padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>Contact Me</Typography>
        <TextField label="Your Name" fullWidth margin="normal" variant="filled" sx={{ background: "white" }} />
        <TextField label="Your Email" fullWidth margin="normal" variant="filled" sx={{ background: "white" }} />
        <TextField label="Message" fullWidth multiline rows={4} margin="normal" variant="filled" sx={{ background: "white" }} />
        <Button variant="contained" color="secondary" sx={{ mt: 2, width: "100%" }}>Send Message</Button>
      </Container>
    </Box>
  );
};

export default Contact;
