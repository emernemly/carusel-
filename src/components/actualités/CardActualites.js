import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiCalendar } from 'react-icons/bi';
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
            <div className='date'>
              {' '}
              <BiCalendar /> {el.date}
            </div>

            <Link to='/'>Lire la suite {'>'}</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardActualites;
