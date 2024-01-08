import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


function Reviews({rev}) {
    console.log(rev);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (

    <div>
          <Button className='form-control mt-5' variant="black"  onClick={handleShow}>
        Check Review
      </Button>

      <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div>
            {
                rev?.map(item=>(
                <Card border='success' className='mt-5'>
      <Card.Header>Review</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            <h4 style={{color:'black',fontWeight:'700px'}} >{item.patient_name}</h4>
            <p style={{color:'black', fontSize:'15px'}}>{item.comments}</p>
            {' '}
          </p>
          <footer className="blockquote-footer">
          {item.date} <cite title="Source Title"><br></br> &nbsp; &nbsp; &nbsp;Rating : {item.rating}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
                ))
            }
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default Reviews