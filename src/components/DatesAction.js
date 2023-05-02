import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'

const DatesAction = ({DeleteData,OnViewData}) => {
  return (
    <Row className='justify-content-center my-2'>
      <Col sm="8" className=' d-flex justify-content-between ' >
        <Button onClick={DeleteData} className='btn-style py-2'> مسح الكل </Button>
        <Button onClick={OnViewData} className='btn-style py-2'> عرض البيانات  </Button>
      </Col>
    </Row>
  )
}

export default DatesAction
