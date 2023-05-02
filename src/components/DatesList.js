import React from 'react'
import { Row,Col } from 'react-bootstrap'

// send person array as aprop to use it in another components
const DatesList = ({person}) => {
  return (
    <Row className='justify-content-center my-2'>
      <Col sm="8" className='' >
        <div className='rectangle p-2'>

            {/* mapping to person array to show data if it exist if not display message ليس لديك مواعيد اليوم  */ }
            {person.length ? (person.map((items)=>{
                return(
                <div key={items.id} className='d-flex border-bottom mx-3 my-3'>
                <img alt='test' className='img-avatar' src={items.img} />
            <div className='px-3'>
                <p className='fs-6 d-inline'> {items.name}</p>
                <p className=''> {items.date}</p>
            </div>
        </div>
                )

            })) :<h1 className='p-5'> ليس لديك مواعيد اليوم </h1> }
            {/* <div className='d-flex border-bottom mx-3 my-3'>
                <img alt='test' className='img-avatar' src={preson[items].img} />
            <div className='px-3'>
                <p className='fs-6 d-inline'> {preson[items].name}</p>
                <p className=''> {preson[items].date}</p>
            </div>
        </div>
        <div className='d-flex border-bottom mx-3 my-3'>
                <img alt='test' className='img-avatar' src='test.jpg' />
            <div className='px-3'>
                <p className='fs-6 d-inline'> سعد حسام سعد</p>
                <p className=''> الخامسه مساء</p>
            </div>
        </div>
        <div className='d-flex border-bottom mx-3 my-3'>
                <img alt='test' className='img-avatar' src='test.jpg' />
            <div className='px-3'>
                <p className='fs-6 d-inline'> سعد حسام سعد</p>
                <p className=''> الخامسه مساء</p>
            </div>
        </div>
        <div className='d-flex border-bottom mx-3 my-3'>
                <img alt='test' className='img-avatar' src='test.jpg' />
            <div className='px-3'>
                <p className='fs-6 d-inline'> سعد حسام سعد</p>
                <p className=''> الخامسه مساء</p>
            </div>
        </div>
        <div className='d-flex border-bottom mx-3 my-3'>
                <img alt='test' className='img-avatar' src='test.jpg' />
            <div className='px-3'>
                <p className='fs-6 d-inline'> سعد حسام سعد</p>
                <p className=''> الخامسه مساء</p>
            </div>
        </div> */}
       
        </div>
              </Col>
    </Row>
  )
}

export default DatesList
