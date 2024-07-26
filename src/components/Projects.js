import React from 'react';
import { Container, CardActionArea, Grid, Box, Tabs, Tab, Card, CardMedia, CardHeader, CardContent, Typography, Chip } from '@mui/material';
import { styled } from '@mui/system';
import path_to_image1 from '../assets/img/battleship.png';
import path_to_image2 from '../assets/img/PittAPI.png';
import path_to_image3 from '../assets/img/feline_good.png';
import path_to_image4 from '../assets/img/portfolioProj.png';
import path_to_image5 from '../assets/img/ppg_project.png';
import path_to_image6 from '../assets/img/ThermoFisher.jpg';

const projects = [
  {
    title: "BattleShip",
    description: "This is class project that shows my JS skills where code is restricted due to academic integrity Policy.",
    imgUrl: path_to_image1,
    category: "Web-Dev/Software-Dev",
    codeurl:"",
    skills: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: "Pitt API",
    description: "This a Open Source API that I contributed to. This API is the Computer Science Club at Pitt.",
    imgUrl: path_to_image2,
    category: "Web-Dev/Software-Dev",
    codeurl: "https://github.com/pittcsc/PittAPI",
    skills: ['Python', 'API', 'Unit Testing']
  },
  {
    title: "FeelineGood",
    description: "This was my first Hakathon experience where me and my team made a web app to make people feel better by showing them images of happy things through an image API generator. We ended up recieiving the Student Choice Award.",
    imgUrl: path_to_image3,
    category: "Hackathons",
    codeurl:"https://github.com/csidarous/feline-good",
    skills: ['JavaScript', 'React', 'CSS', 'Collaboration']
  },
  {
    title: "PPG Paint Insights",
    description: "In class project wherecode is restricted due to academic integrity Policy .",
    imgUrl: path_to_image5,
    category: "Machine-Learning",
    codeurl: "",
    skills: ['R', 'Machine Learning Models', 'Data Visualizations', 'Data Preprocessing']
  },
  {
    title: "Portfolio Website",
    description: "This is a website I created from scratch to display my experiences, projects, and my acedmic/career journey.",
    imgUrl: path_to_image4,
    category: "Web-Dev/Software-Dev",
    codeurl:"https://github.com/csidarous/Personal-Portfolio-Website",
    skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Material UI', 'TypeScript']
  },
  {
    title: "Supply Chain Data Analytics For Thermofisher ",
    description: "This was a Capstone Project at University of Pittsburgh. Code is restricted due to NDA.",
    imgUrl: path_to_image6,
    category: "Machine-Learning",
    codeurl:"",
    skills: ['Python', 'DataBricks', 'Scikit-Learn', 'Collaboration']
  },
  // Add more projects here
];

const categories = ["All", "Machine-Learning", "Web-Dev/Software-Dev", "Hackathons"];


export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  const handleChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const StyledChip = styled(Chip)({
    '&:hover': {
      backgroundColor: '#3b61c3',
      cursor: 'pointer'
    }
  });
  
  return (
    <Box sx={{ padding: '80px 0', backgroundColor: '#171e2f', color: '#fff' }} id="projects">
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '50px', fontSize: '45px', fontWeight: 700 }}>
          Projects
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '30px' }}>
          <Tabs
            value={selectedCategory}
            onChange={handleChange}
            centered
            textColor="fff"
            indicatorColor="primary"
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} value={category} />
            ))}
          </Tabs>
        </Box>
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: '#1e1e1e',
                  color: '#fff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <CardActionArea
                  component="a"
                  href={project.codeurl}
                  target="_blank"
                  sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <CardHeader
                    title={project.title}
                    titleTypographyProps={{ variant: 'h6' }}
                    sx={{ textAlign: 'center' }}
                  />
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.imgUrl}
                    alt={project.title}
                    sx={{
                      height: '200px',
                      width: '100%',
                      objectFit: 'cover',
                      backgroundColor: '#2c2c2c' // Optional: Add a background color to handle empty spaces
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ color: '#fff' }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ marginTop: '10px' }}>
                      {project.skills.map((skill, skillIndex) => (
                        <StyledChip
                          key={skillIndex}
                          label={skill}
                          variant="outlined"
                          sx={{ marginRight: '5px', marginBottom: '5px', color: '#fff', borderColor: '#fff' }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
