import React from 'react'
import { Container, Button, Row, Card, CardHeader, CardBody } from 'react-bootstrap'
export default function ContainerApp() {
  return (
    <>
        <Container className='shadow mt-5 p-5'>
                <Row>
                 <div className='col-md-4 mt-5'>
                    <Card>
                    <CardHeader className='bg-primary text-white'>Teams <h4 className='float-end'><span className='bi bi-person-add'></span></h4></CardHeader>
                    <CardBody className='p-5'>
                        <p>Lorem ipsum text content</p>
                        <Button type='button' className='btn btn-primary text-white'>Click Me <span className='bi bi-person'></span></Button>
                    </CardBody>
                    </Card>
                 </div>


                   <div className='col-md-4 mt-5'>
                    <Card>
                    <CardHeader className='bg-primary text-white'>Teams <h4 className='float-end'><span className='bi bi-person-add'></span></h4></CardHeader>
                    <CardBody className='p-5'>
                        <p>Lorem ipsum text content</p>
                        <Button type='button' className='btn btn-primary text-white'>Click Me <span className='bi bi-person'></span></Button>
                    </CardBody>
                    </Card>
                 </div>

                   <div className='col-md-4 mt-5'>
                    <Card>
                    <CardHeader className='bg-primary text-white'>Teams <h4 className='float-end'><span className='bi bi-person-add'></span></h4></CardHeader>
                    <CardBody className='p-5'>
                        <p>Lorem ipsum text content</p>
                        <Button type='button' className='btn btn-primary text-white'>Click Me <span className='bi bi-person'></span></Button>
                    </CardBody>
                    </Card>
                 </div>


                   <div className='col-md-8 mt-5'>
                    <Card>
                    <CardHeader className='bg-primary text-white'>Teams <h4 className='float-end'><span className='bi bi-person-add'></span></h4></CardHeader>
                    <CardBody className='p-5'>
                        <p>Lorem ipsum text content</p>
                        <Button type='button' className='btn btn-primary text-white'>Click Me <span className='bi bi-person'></span></Button>
                    </CardBody>
                    </Card>
                 </div>

                   <div className='col-md-4 mt-5'>
                    <Card>
                    <CardHeader className='bg-primary text-white'>Teams <h4 className='float-end'><span className='bi bi-person-add'></span></h4></CardHeader>
                    <CardBody className='p-5'>
                        <p>Lorem ipsum text content</p>
                        <Button type='button' className='btn btn-primary text-white'>Click Me <span className='bi bi-person'></span></Button>
                    </CardBody>
                    </Card>
                 </div>
                </Row>
        </Container>
    </>
  )
}
