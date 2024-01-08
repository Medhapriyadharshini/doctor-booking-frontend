import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Reviews from './Reviews';



function ViewOneDoc() {
  const [docDetails,setDocDetails] = useState({})

  const {id}= useParams()
  console.log(id);

  // API
  const base_url="http://localhost:3001/doctors"

  const fetchDoc = async()=>{
    const result= await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setDocDetails(result.data)
  }
  console.log(docDetails);

  useEffect(()=>{
    fetchDoc()
  },[])

  return (
    <div className='m-5'>
      <h1 className='text-center mb-5 mt-5 '>{docDetails.hospital}</h1>
      <div className="container d-flex justify-content-center mt-5">
      <MDBCard className='center mb-5 mt-3' style={{ maxWidth: '900px'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage style={{height:'427px',width:'570px'}} src='https://www.fertilitysol.com/wp-content/uploads/2023/06/Symptoms-After-Embryo-Transfer-1.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardText style={{color:'darkred',fontSize:'30px',fontWeight:'600',textAlign:'center'}}>{docDetails.name} <span style={{fontSize:'18px',color:'black',fontWeight:"400"}}>({docDetails.specialty})</span></MDBCardText>
            <MDBCardText></MDBCardText>
            <MDBCardText  className="text-center">
              {docDetails.address}<br></br>{docDetails.email}<br></br>{docDetails.phone}
            </MDBCardText>
            <MDBCardText className="text-center text-black">Working Days : <span style={{fontSize:'18px', fontWeight:'600'}}>{docDetails.available_days?.join(' | ')}</span> </MDBCardText>
            <MDBCardText className="text-center text-black" >Working Hours : <span style={{fontSize:'18px', fontWeight:'600'}}>{docDetails.available_hours}</span></MDBCardText>
            <MDBCardText><Reviews rev={docDetails.reviews}/></MDBCardText>
           

            <MDBBtn href='#' className='mt-3 d-flex justify-content-center'>Book Now</MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      </div>
      
    </div>
  )
}

export default ViewOneDoc