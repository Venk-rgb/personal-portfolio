import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Snackbar } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import profilePic from "./images/passport_style_photo.jpg";
import "./App.css";

const pages = ["home", "about", "projects", "experience", "contact"];
const components = {
  home: <Home />, 
  about: <About />, 
  projects: <Projects />, 
  experience: <Experience />, 
  contact: <Contact />,
};

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [showHint, setShowHint] = useState(true);

  const handleNavigation = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setAnimationClass(index > currentIndex ? "rotate-forward" : "rotate-backward");
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
        setAnimationClass("");
      }, 1000);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isAnimating) {
      if (event.key === "ArrowRight") {
        handleNavigation(Math.min(currentIndex + 1, pages.length - 1));
      } else if (event.key === "ArrowLeft") {
        handleNavigation(Math.max(currentIndex - 1, 0));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <AppBar position="fixed" sx={{ background: "#2c3e50", zIndex: 1000, top: 0 }}>
        <Toolbar>
          <Avatar src={profilePic} sx={{ width: 40, height: 40, marginRight: 1 }} />
          <Typography 
            variant="h6" 
            sx={{ flexGrow: 1, fontWeight: 'bold', animation: 'slideIn 1.5s ease-in-out forwards' }}
          >
           Venkataramanan Venkateswaran
          </Typography>
          {pages.map((page, index) => (
            <Button 
              key={page} 
              color={index === currentIndex ? "secondary" : "inherit"} 
              onClick={() => handleNavigation(index)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Box 
        className={animationClass}
        sx={{ 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          transition: "transform 1s ease-in-out, box-shadow 1s ease-in-out", 
          boxShadow: isAnimating ? "0px 30px 50px rgba(0, 0, 0, 0.5)" : "0px 5px 15px rgba(0, 0, 0, 0.2)"
        }}
      >
        {components[pages[currentIndex] as keyof typeof components]}
      </Box>
      <Snackbar
        open={showHint}
        message="Use Left and Right Arrow Keys to Navigate"
        autoHideDuration={5000}
        onClose={() => setShowHint(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default App;