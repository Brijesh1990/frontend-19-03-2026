import React from 'react'
import { MDBContainer, MDBRow, MDBBadge, MDBBtn } from 'mdb-react-ui-kit'
export default function DemoApp() {
  return (
    <>
        <MDBContainer className='bg-info shadow p-5 mx-auto w-50 mt-5'>
            <MDBRow className='gap-3'>
             <div className='col-md-4 p-5 bg-danger'></div>
             <div className='col-md-7 p-5 bg-danger'></div>

             <div className='col-md-7 p-5 bg-danger'></div>
             <div className='col-md-4 p-5 bg-danger'></div>

             <div className='col-md-3 p-5 bg-danger'></div>
             <div className='col-md-8 p-5 bg-danger'></div>
            </MDBRow>
        </MDBContainer>
    </>
  )
}
