import React, { useState } from 'react';
import { Container, Box, Button, Typography, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import {
  SiJavascript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiCss3,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

const SectionBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  color: '#000',
  padding: theme.spacing(4),
  textAlign: 'left',
  marginTop: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const SectionContent = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
}));

const experiences = [
  {
    title: "Data Science",
    description: "The power of first impressions cannot be underestimated...",
    linkText: "View Github",
    linkUrl: "#",
  },
  {
    title: "Software Engineering",
    description: "While I may not fit the conventional mold...",
    linkText: "View Products",
    linkUrl: "/Projects",
  },
  {
    title: "Design",
    description: "Despite not fitting the typical designer stereotype...",
    linkText: "View Dribbble",
    linkUrl: "#",
  },
];

const skills = [
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiCss3 />, name: 'CSS' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  

  return (
    <section className="about" id="abouts">
      <Container>
        <Typography variant="h1" align="center">
          About Me
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="white"
        >
          <Tab label="Career" />
          <Tab label="Interests" />
          <Tab label="Resume" />
          <Tab label="Skills" />
          <Tab label="Work Experience & Achievements" />
        </Tabs>

        {activeTab === 0 && (
          <SectionBox>
            {experiences.map((exp, index) => (
              <SectionContent key={index}>
                <Typography variant="h3">{exp.title}</Typography>
                <p>{exp.description}</p>
                <Link to={exp.linkUr}>{exp.linkText}</Link>
              </SectionContent>
            ))}
          </SectionBox>
        )}
        {activeTab === 1 && (
          <SectionBox>
            <SectionTitle>Interests</SectionTitle>
            <SectionContent>
              <p>Gardening: <a href="your-gardening-blog-link" target="_blank" rel="noopener noreferrer">Visit my gardening blog</a></p>
              <p>Reading: List of favorite books...</p>
            </SectionContent>
          </SectionBox>
        )}
        {activeTab === 2 && (
          <SectionBox>
            <SectionTitle>Resume</SectionTitle>
            <SectionContent>
            <Button
              variant="contained"
              color="primary"
              href="/resume.pdf"
              rel="noopener noreferrer"
            >
              Download My Resume
            </Button>
            </SectionContent>
          </SectionBox>
        )}
        {activeTab === 3 && (
          <SectionBox>
            <SectionTitle>Skills</SectionTitle>
            <SectionContent>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>
                    {skill.icon} {skill.name}
                  </li>
                ))}
              </ul>
            </SectionContent>
          </SectionBox>
        )}
        {activeTab === 4 && (
          <SectionBox>
            <SectionTitle>Work Experience & Achievements</SectionTitle>
            <SectionContent>
              {/* Add your work experience and achievements here */}
              <p>Experience 1...</p>
              <p>Experience 2...</p>
            </SectionContent>
          </SectionBox>
        )}
      </Container>
    </section>
  );
};

export default About;
