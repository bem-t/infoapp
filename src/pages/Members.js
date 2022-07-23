import React from 'react'
import {useEffect, useState} from 'react'
import  { getData }  from "../service/service";
import Table from 'react-bootstrap/Table';

export const Members = () => {
    const [member, getMember] = useState([])

    useEffect(()=>{
     const getMembers =async()=>{
       let members = await getData('members')
       getMember(members)
     } 
     getMembers()
    },[])
     
    console.log(member)
     
     return (
       <div className="App">
         <Table responsive="sm">
           <thead>
             <tr>
               <th scope="col">ID</th>
               <th scope="col">LOGIN</th>
               <th scope="col">AVATAR</th>
               <th scope="col">LINK</th>
               <th scope="col">TYPE</th>
               <th scope="col">ADMIN</th>
             </tr>
           </thead>
           {
             member.map((member)=>{
               return (
           <tbody>
             <tr>
               <th scope="row">{member.id}</th>
               <td>{member.login}</td>
               <td><img src="{member.avatar_url}"/></td>
               <td>{member.html_url}</td>
               <td>{member.type}</td>
               <td>{member.site_admin ? <p>true</p> : <p>false</p>}</td>
             </tr>
           </tbody>
               )
             })
           }
         </Table>
       </div>
     );
}
