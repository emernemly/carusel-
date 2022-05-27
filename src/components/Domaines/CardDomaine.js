import React from 'react';
import { Card, Button, CardImg } from 'react-bootstrap';
import './Domaines.scss';
const CardDomaine = ({ domaine }) => {
  return (
    <div>
      <Card className='domaine'>
        <CardImg src={domaine.image} alt={domaine.image} />
        <Card.Body>
          <Card.Title>
            <h4>{domaine.title}</h4>
          </Card.Title>

          <Card.Text>{domaine.description}</Card.Text>

          <button className='primary-btn' variant='primary'>
            Lire la suite {'>'}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDomaine;
