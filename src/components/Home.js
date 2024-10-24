import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/system';
import TrackVisibility from 'react-on-screen';
import resumeIMG from '../assets/img/portimg.png';
import pittIMG from '../assets/img/pitt.png';
import careerIMG from '../assets/img/datasciIMG.png';
import { useNavigate } from 'react-router-dom';

const BackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1a237e 50%, #0d47a1 50%)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  flexDirection: 'column',
}));

const HelloText = styled(Typography)(({ theme }) => ({
  fontSize: '10rem',
  fontWeight: 'bold',
  margin: 0,
}));

const NameText = styled(Typography)(({ theme }) => ({
  fontSize: '5rem',
  marginTop: theme.spacing(2),
}));

const MonthlyUpdateSection = styled(Box)(({ theme }) => ({
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

const ResumeSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'left',
  backgroundColor: '#0033a0',
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: '40%',
  height: 'auto',
  marginRight: theme.spacing(4),
}));

const InfoBox = styled(Box)(({ theme }) => ({
  width: '60%',
}));

const ReverseSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(4),
  backgroundColor: '#5681df',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
}));

const monthlyUpdates = [
  '1. Pursuing the Google Data Analytics Certificate.',
  '2. Currently enrolled in 13 credits at the University of Pittsburgh.',
  '3. Actively seeking full-time roles in Data Analytics, Software Engineering, or Machine Learning after Spring 2025 graduation.',
];

export const Home = () => {
  const navigate = useNavigate();

  const handleScrollToResume = () => {
    document.getElementById('resume-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToLinkedIn = () => {
    document.getElementById('linkedin-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCareer = () => {
    document.getElementById('career-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section id="home">
        <TrackVisibility>
          {({ isVisible }) => (
            <BackgroundBox className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
              <HelloText variant="h1">Hello,</HelloText>
              <NameText variant="h2">I'm Christopher Sidarous</NameText>
              <MonthlyUpdateSection>
                <SectionTitle variant="h2">This Month's Focus</SectionTitle>
                <SectionContent>
                  {monthlyUpdates.map((update, index) => (
                    <p key={index}>{update}</p>
                  ))}
                </SectionContent>
              </MonthlyUpdateSection>
              <Button onClick={handleScrollToResume} variant="contained" color="primary" sx={{ marginTop: 4 }}>
                View My Resume
              </Button>
            </BackgroundBox>
          )}
        </TrackVisibility>
      </section>

      <section id="resume-section">
        <ResumeSection>
          <ImageBox>
            <img src={resumeIMG} alt="Resume Preview" />
          </ImageBox>
          <InfoBox>
            <SectionTitle variant="h2">Resume</SectionTitle>
            <Button
              variant="contained"
              color="primary"
              href="/resume.pdf"
              rel="noopener noreferrer"
            >
              Download My Resume
            </Button>
          </InfoBox>
          <Button onClick={handleScrollToLinkedIn} variant="contained" color="primary" sx={{ marginTop: 4 }}>
            View LinkedIn Profile
          </Button>
        </ResumeSection>
      </section>

      <section id="linkedin-section">
        <ReverseSection>
          <InfoBox>
            <SectionTitle variant="h2">LinkedIn</SectionTitle>
            <Button
              variant="contained"
              color="primary"
              href="https://www.linkedin.com/in/csidarous/"
              target="_blank"
            >
              Visit My LinkedIn
            </Button>
          </InfoBox>
          <ImageBox>
            <img src={pittIMG} alt="Pitt Logo" />
          </ImageBox>
          <Button onClick={handleScrollToCareer} variant="contained" color="primary" sx={{ marginTop: 4 }}>
            Learn More About My Career
          </Button>
        </ReverseSection>
      </section>

      <section id="career-section">
        <ResumeSection>
          <ImageBox>
            <img src={careerIMG} alt="Career Accomplishments" />
          </ImageBox>
          <InfoBox>
            <SectionTitle variant="h2">Career Goals & Achievements</SectionTitle>
            <SectionContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="ThermoFisher Capstone Project (Spring 2024)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Completed CodePath Interview Prep (TIP 101) ~Summer 2024" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="SheInnovates Hackathon Student Choice Award ~Spring 2023" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Headstarter AI Software Engineering Fellow ~Summer 2024" />
                </ListItem>
              </List>
            </SectionContent>
          </InfoBox>
          <Button onClick={() => handleNavigation('/about')} variant="contained" color="primary" sx={{ marginTop: 4 }}>
            Learn More About Me
          </Button>
        </ResumeSection>
      </section>
    </>
  );
};

export default Home;
