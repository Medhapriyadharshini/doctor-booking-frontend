import React, { useEffect, useState } from 'react'
import {Row ,Col} from 'react-bootstrap'
import ViewDoctors from './ViewDoctors'
import axios from 'axios'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

function AllDoctors() {
  const base_url = "http://localhost:3001/doctors"

  // to hold array of restaurant data
  const [AllDocData, setAllDocData] = useState([])

  // API fetching
  const fetchData = async () => {
    const result = await axios.get(base_url)
    console.log(result.data);

    setAllDocData(result.data)
  }

  console.log(AllDocData);

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <section >
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img style={{height:'650px'}} src='https://www.carepointmedical.com.au/wp-content/uploads/2020/08/doctors_three.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Find your Healthcare Team</h5>
          <p>We are here to help your new primary phisician,connect with a specialist or receive health training.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img style={{height:'650px'}}  src='https://s33007.pcdn.co/wp-content/uploads/2020/06/health-care-doctor-monitor.jpg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h5>Coordinations with Sub-specialists</h5>
          <p>From doctor-to-doctor consultations to multi-desciplinary case reviews,our clinic does it well.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img style={{height:'650px'}} src='https://news.virginia.edu/sites/default/files/article_image/ai_in_medicine_header.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Helping building a healthier future</h5>
          <p>At specialized clinic, we provide the best quality healthcare for each patient by offer tailored solutions to your specific goals.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
      </section>

<div className="p-1" >
<h1 style={{textAlign:'center',marginTop:'120px',color:'darkgreen'}}>Select your doctor here</h1>
<p className='text-center fs-4'>Chart Your Path To Better Living.</p>

</div>
     
    <Row>
      {
        AllDocData.map(item => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ViewDoctors doctors={item} />
          </Col>
        ))
      }
    </Row>
  </div>
  )
}

export default AllDoctors