import React from 'react';
import { Card } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Card className="proj-imgbx">
      <Card.Img variant="top" src={imgUrl} alt={title} />
      <Card.Body className="proj-txtx">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
