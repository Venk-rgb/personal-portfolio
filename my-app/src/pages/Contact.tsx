import React from "react";
import { Typography, Container, TextField, Button } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <TextField label="Your Name" fullWidth margin="normal" />
      <TextField label="Your Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Send Message</Button>
    </Container>
  );
};

export default Contact;
