import axios from 'axios';
import React from 'react'
import {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';


export const Home = () => {
    const [info, getInfo] = useState({})

    useEffect(()=>{
     const getInfos =async()=>{
       let {data} = await axios.get('https://api.github.com/orgs/boomtownroi')
       getInfo(data)
     } 
     getInfos()
    },[])
     
    console.log(info)
     
     return (
       <div className="App">
         <Table>
           <thead>
             <tr>
               <th scope="col">ID</th>
               <th scope="col">NAME</th>
               <th scope="col">LINK</th>
               <th scope="col">IsVERIFIED</th>
               <th scope="col">CREATED</th>
               <th scope="col">UPDATED</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row">{info.id}</th>
               <td>{info.name}</td>
               <td>{info.html_url}</td>
               <td>{info.is_verified ? <p>false</p> : <p>true</p>}</td>
               <td>{info.created_at}</td>
               <td>{info.updated_at}</td>
             </tr>
           </tbody>
         </Table>
       </div>
     );
}
