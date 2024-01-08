import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom"

function viewDoctors({doctors}) {
  return (
    <Link to={`view/${doctors.id}`} style={{textDecoration:'none'}}>
    

    <div className='m-5' style={{width:'300px',height:'400px'}}>
    <MDBCard alignment='center'>
   
      <MDBCardBody>
        <MDBCardTitle className='mt-5' style={{fontSize:'18px',color:'black'}}>{doctors.name}</MDBCardTitle>
        <MDBCardText className='mb-5'>( {doctors.specialty} )</MDBCardText>
        

        <MDBCardText style={{fontSize:'20px',fontWeight:'600'}}>{doctors.hospital}</MDBCardText>
        <MDBCardText style={{fontSize:'11px'}}>{doctors.address}</MDBCardText>
       
        <MDBBtn href='#' size='sm'>More Details</MDBBtn>
     
      <MDBCardText className='text-center'><img style={{height:'70px', width:'70px'}} src="https://cdn-icons-png.flaticon.com/128/10801/10801392.png" alt="" />{doctors.rating}</MDBCardText>
      </MDBCardBody>
    </MDBCard>

    </div>
    </Link>
    
  )
}

export default viewDoctors