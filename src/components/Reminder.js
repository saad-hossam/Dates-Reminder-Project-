import React, { useState } from 'react'
import  {Button, Container,Col,Row} from 'react-bootstrap';
import { person } from '../Data';
import DatesCount from './DatesCount';
import DatesList from './DatesList';
import DatesAction from './DatesAction';
const Reminder = () => {
    // const preson=[
    //     {id:'1',name:'سعد',date:'الخامسه مساء',img:'test.jpg'},
    //     {id:'2',name:'حسام',date:'السادسه مساء',img:'test.jpg'},
    //     {id:'3',name:'محمد',date:'السابعه مساء',img:'test.jpg'},
    //     {id:'4',name:'محمود',date:'الثامنه مساء',img:'test.jpg'},
    //     {id:'5',name:'على',date:'التاسعه مساء',img:'test.jpg'}
     
    // ] 
    const [PersonData, setPersonData] = useState(person)

    const onDelete =()=>{
        setPersonData([])
    }
    const onShow =()=>{
        setPersonData(person)
    }
  return (
    <div className="font color-body">
   <Container className='py-5'>

         <DatesCount person={PersonData}/>
         <DatesList  person={PersonData}/>
         <DatesAction DeleteData={onDelete} OnViewData={onShow}/>

   </Container>
   </div>
  )
}

export default Reminder
