import React from "react";
import { Typography, Card, CardContent, Box } from "@mui/material";

const experiences = [
  { title: "Data Engineering Intern", company: "CloudX", period: "June - Aug 2024", description: "Built AI-powered solutions for finance." },
  { title: "Graduate Data Assistant", company: "NYU Wasserman", period: "Sep 2023 - May 2024", description: "Automated data pipelines and dashboards." },
  { title: "Software Engineer", company: "Thoughtworks", period: "Aug 2020 - Jul 2023", description: "Worked on scalable backend solutions." }
];

const Experience: React.FC = () => {
  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "70%", padding: 3 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>Work Experience</Typography>
        {experiences.map((exp, index) => (
          <CardContent key={index} sx={{ borderBottom: index !== experiences.length - 1 ? "1px solid #ddd" : "none" }}>
            <Typography variant="h6">{exp.title} - {exp.company}</Typography>
            <Typography variant="caption" color="textSecondary">{exp.period}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>{exp.description}</Typography>
          </CardContent>
        ))}
      </Card>
    </Box>
  );
};

export default Experience;
