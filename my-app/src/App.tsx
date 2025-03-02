import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import './App.css';
import profilePic from "./images/passport_style_photo.jpg";

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ background: "#2c3e50" }}>
      <Toolbar>
        <Avatar src={profilePic} sx={{ width: 50, height: 50, margin: "5px 5px 5px 5px" }} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>Venkataramanan Venkateswaran</Typography>
        <Button color={location.pathname === "/" ? "secondary" : "inherit"} component={Link} to="/">Home</Button>
        <Button color={location.pathname === "/about" ? "secondary" : "inherit"} component={Link} to="/about">About</Button>
        <Button color={location.pathname === "/projects" ? "secondary" : "inherit"} component={Link} to="/projects">Projects</Button>
        <Button color={location.pathname === "/experience" ? "secondary" : "inherit"} component={Link} to="/experience">Experience</Button>
        <Button color={location.pathname === "/contact" ? "secondary" : "inherit"} component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
