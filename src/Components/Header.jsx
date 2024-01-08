import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,MDBInputGroup
  } from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
    <MDBNavbar className='bg-black'>
      <MDBContainer fluid> 
        <MDBNavbarBrand className='text-success'>
        <i class="fa fa-user-md fa-shake" aria-hidden="true"></i> &nbsp; Doctor Bookings
            </MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
          <MDBBtn outline className='text-light'>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header