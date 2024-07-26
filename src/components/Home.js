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
  '1. Working on Google Data Analytics Certificate.',
  '2. Enhancing my portfolio with new AI projects through Headstarter AI Fellow.',
  '3. Volunteering for Philly Community Wireless working with Dat Visualizations',
];

export const Home = () => {
  const handleScrollToResume = () => {
    document.getElementById('resume-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToLinkdn = () => {
    document.getElementById('lnkd').scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCareer= () => {
    document.getElementById('career').scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();

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
              <HelloText variant="h1">
                Hello,
              </HelloText>
              <NameText variant="h2">
                My name is Christopher Sidarous
              </NameText>
              <MonthlyUpdateSection>
                <SectionTitle variant="h2">
                  What I'm up to this month
                </SectionTitle>
                <SectionContent>
                  {monthlyUpdates.map((update, index) => (
                    <p key={index}>{update}</p>
                  ))}
                </SectionContent>
              </MonthlyUpdateSection>
              <Button onClick={handleScrollToResume} variant="contained" color="primary" sx={{ marginTop: 4 }}>
                Go To Resume
              </Button>
            </BackgroundBox>
          )}
        </TrackVisibility>
      </section>

      <section id="resume-section">
        <ResumeSection>
          <ImageBox>
            <img src={resumeIMG} alt="" />
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
          <Button onClick={handleScrollToLinkdn} variant="contained" color="primary" sx={{ marginTop: 4 }}>
              Go To Linkdin
          </Button>
        </ResumeSection>
        </section>

        <section id="lnkd">
        <ReverseSection>
          <InfoBox>
            <SectionTitle variant="h2">LinkedIn</SectionTitle>
            <Button variant="contained" color="primary"href="https://www.linkedin.com/in/yourprofile" target="_blank">
              Visit my LinkedIn profile
            </Button>
          </InfoBox>
          <ImageBox>
            <img src={pittIMG} alt="" />
          </ImageBox>
          <Button onClick={handleScrollToCareer} variant="contained" color="primary" sx={{ marginTop: 4 }}>
              More Info
          </Button>
        </ReverseSection>
        </section>

        <section id="career">
        <ResumeSection>
          <ImageBox>
            <img src={careerIMG} alt="" />
          </ImageBox>
          <InfoBox>
            <SectionTitle variant="h2">Career Goals & Accomplishments</SectionTitle>
            <SectionContent>
            <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Achieving Google Analytics Certificate" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Participating in CodePath Interview Prep (TIP 101)" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="Attended SheInnovates Hackathon"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Headstarter Fellow" />
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
