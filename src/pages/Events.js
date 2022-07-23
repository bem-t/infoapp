import React from 'react'
import {useEffect, useState} from 'react'
import  { getData }  from "../service/service";
import Table from 'react-bootstrap/Table';

export const Events = () => {
    const [event, getEvent] = useState([])

    useEffect(()=>{
     const getEvents =async()=>{
       let events = await getData('events')
       getEvent(events)
     } 
     getEvents()
    },[])
     
    console.log(event)
     
     return (
       <div className="App">
         <Table responsive="sm">
           <thead>
             <tr>
               <th scope="col">ID</th>
               <th scope="col">TYPE</th>
               <th scope="col">
                NAME
                </th>
               <th scope="col">CREATED</th>
             </tr>
           </thead>
           {
             event.map((event)=>{
               return (
           <tbody>
             <tr>
               <th scope="row">{event.id}</th>
               <td>{event.type}</td>
               <td>
               <a href={event.repo.url}>
                {event.repo.name}
                </a></td>
               
               <td>{event.created_at}</td>
             </tr>
           </tbody>
               )
             })
           }
         </Table>
       </div>
     );
}
