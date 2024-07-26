import React, { useState } from 'react';
import { Container, Box, Button, Typography, Tabs, Tab, List, ListItem, ListItemText, ListItemIcon, Divider, Grid} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { styled } from '@mui/system';
import { SiJavascript, SiReact, SiPython, SiCss3, SiPostgresql, SiHtml5, SiC, SiR, SiFlask, SiGit, SiSqlalchemy, SiPandas, SiScikitlearn, SiDatabricks } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

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


const skills = {
  Languages: [
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiC />, name: 'C' },
    { icon: <SiPostgresql />, name: 'SQL' },
    { icon: <SiR />, name: 'R' },
    { icon: <SiHtml5 />, name: 'HTML' },
    { icon: <SiCss3 />, name: 'CSS' }
  ],
  FrameworksTechnologies: [
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <SiReact />, name: 'React Native' },
    { icon: <SiSqlalchemy />, name: 'SQLAlchemy' },
    { icon: <SiPandas />, name: 'Pandas' },
    { icon: <SiScikitlearn />, name: 'Scikit Learn' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiDatabricks />, name: 'Data Bricks' }
  ],
  OtherSkills: [
    { icon: null, name: 'Agile Methodologies' },
    { icon: null, name: 'Data Analytics' },
    { icon: null, name: 'Data Cleaning' },
    { icon: null, name: 'Data Visualisations' },
    { icon: null, name: 'Machine Learning' }
  ]
};

const experiences = [
  {
    title: 'Software Engineering Fellow @ Headstarter AI',
    date: 'July 2024 - Present',
    description: 'Participated in the Headstarter Fellowship program focusing on leadership and innovation.'
  },
  {
    title: 'Volunteer @ Philly Community Wireless(PCW)',
    date: 'May 2024 - Present',
    description: 'Volunteered at PCW, contributing to community projects and assisting in various initiatives.'
  },
  {
    title: 'Undergraduate Teaching Assistant(UTA) @ University of Pittsburgh',
    date: 'August 2022 - Present',
    description: 'Assisted professors in teaching undergraduate courses, grading assignments, and providing support to students.'
  },
  {
    title: 'Machine Learning Capstone for ThermoFisher @ University of Pittsburg',
    date: 'January 2024 - April 2024',
    description: 'Worked on a machine learning capstone project at ThermoFisher, focusing on data analysis and model development.'
  },
  {
    title: 'IT Intern @ Lavner Education',
    date: 'June 2022 - August 2023 (Summers)',
    description: 'Interned at Lavner Education, handling IT support, teaching children about tech, and assisting with tech-related tasks.'
  }
];

export const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
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
          <Tab label="Experience" />
          <Tab label="Resume" />
          <Tab label="Skills" />
        </Tabs>
      {activeTab === 0 && (
        <SectionBox>
          <Typography variant="h4" gutterBottom>
            Experiences
            </Typography>
          <List>
          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <WorkIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h6">{experience.title}</Typography>}
                  secondary={
                    <>
                      <Typography variant="body2" color="textSecondary">
                        {experience.date}
                      </Typography>
                      <Typography variant="body1">
                        {experience.description}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < experiences.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
          </List>
          <Button onClick={() => handleNavigation('/projects')} variant="contained" color="primary" sx={{ marginTop: 4 }}>
              Got to see My Experience in Action
          </Button>
        </SectionBox>
        )}
        {activeTab === 1 && (
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
        {activeTab === 2 && (
          <SectionBox>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <SectionContent>
            {Object.keys(skills).map((category) => (
              <Box key={category} sx={{ marginBottom: '20px' }}>
                <Typography variant="h5" gutterBottom>
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </Typography>
                <Grid container spacing={2}>
                  {skills[category].map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                      <Box display="flex" alignItems="center">
                        {skill.icon && (
                          <Box component="span" sx={{ marginRight: '8px' }}>
                            {skill.icon}
                          </Box>
                        )}
                        <Typography variant="body1">{skill.name}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
            <Button onClick={() => handleNavigation('/projects')} variant="contained" color="primary" sx={{ marginTop: 4 }}>
                      Got to see My skills in Action
            </Button>
            </SectionContent>
          </SectionBox>
        )}
      </Container>
    </section>
  );
};

export default About;
