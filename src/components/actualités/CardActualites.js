import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CardActualites = ({ el }) => {
  return (
    <div>
      <Card className='Actualites-contant'>
        <CardImg src={el.img} alt={el.title} />
        <Card.Body className='body'>
          <Card.Title>
            <h4>{el.title}</h4>
          </Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <div className='info'>
            {el.date}
            <Link to='/'>Lire la suite {'>'}</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardActualites;
