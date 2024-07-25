import React from 'react';
import { Container, Grid, Box, Tabs, Tab, Card, CardMedia, CardContent, Typography } from '@mui/material';
import path_to_image1 from '../assets/img/battleship.png';
import path_to_image2 from '../assets/img/PittAPI.png';
import path_to_image3 from '../assets/img/feline_good.png';

const projects = [
  {
    title: "BattleShip(Class project)",
    description: "Description for project 1",
    imgUrl: path_to_image1,
    category: "Web-Dev/Software-Dev",
    codeurl:"#"
  },
  {
    title: "Pitt API",
    description: "Description for project 2",
    imgUrl: path_to_image2,
    category: "Web-Dev/Software-Dev",
    codeurl: "https://github.com/pittcsc/PittAPI"
  },
  {
    title: "FeelineGood",
    description: "Description for project 2",
    imgUrl: path_to_image3,
    category: "Hackathons",
    codeurl:"https://github.com/csidarous/feline-good"
  },
  {
    title: "Sports Analysis",
    description: "Description for project 2",
    imgUrl: "path_to_image2",
    category: "Machine-Learning",
    codeurl:"#"
  },
  {
    title: "Gardening Website",
    description: "Description for project 2",
    imgUrl: "path_to_image2",
    category: "Web-Dev/Software-Dev",
    codeurl:"#"
  },
  {
    title: "PCW Data Visualizations",
    description: "Description for project 2",
    imgUrl: "path_to_image2",
    category: "Data-Visualizations",
    codeurl:"#"
  },
  {
    title: "Coursera Project",
    description: "Description for project 2",
    imgUrl: "path_to_image2",
    category: "Data-Visualizations",
    codeurl:"#"
  },
  // Add more projects here
];

const categories = ["All", "Data-Visualizations", "Machine-Learning", "Web-Dev/Software-Dev", "Hackathons"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  const handleChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };
  
  return (
    <Box sx={{ padding: '150px 0', backgroundColor: '#171e2f', color: '#fff' }} id="projects">
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '50px', fontSize: '45px', fontWeight: 700 }}>
          Projects
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '30px' }}>
          <Tabs
            value={selectedCategory}
            onChange={handleChange}
            centered
            textColor="#1976d2"
            indicatorColor="primary"
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} value={category} />
            ))}
          </Tabs>
        </Box>
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item md={6} lg={4} key={index}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
                <a href={project.codeurl} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imgUrl}
                  alt={project.title}
                  href = {project.codeurl}
                />
              <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ color: '#fff' }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </a>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
