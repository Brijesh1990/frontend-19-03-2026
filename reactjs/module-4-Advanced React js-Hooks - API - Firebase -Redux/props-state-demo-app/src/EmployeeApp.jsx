import React,{useState} from 'react'
import Data from './Data';
import { Container, Row } from 'react-bootstrap';
export default function EmployeeApp() {
    // destructuring data when fetch employee details via api
    const[emp,setEmp]=useState("");
  return (
    
    <>
        <Container className='w-75 mx-auto mt-5 p-5 shadow'>
        <h2>Our Teams</h2>    
        <Row>
         {Data().map((item) => {
            return(
                <>
        
                   <div className='col-md-4 m-0 p-3'>
                    <img src={item.photo}  style={{width:"100%"}}/>
                    <p align="center"><b>Name :</b>{item.name}</p>
                    <p align="center"><b>Age :</b>{item.age}</p>
                   </div>   
        

                </>
            )
         })}
        
        </Row>

        </Container>
    </>
  )
}
