import React from 'react'
import {useEffect, useState} from 'react'
import  { getData }  from "../service/service";

export const Repo = () => {
    const [repo, getRepo] = useState([])

    useEffect(()=>{
     const getRepos =async()=>{
       let repos = await getData('repos')
       getRepo(repos)
     } 
     getRepos()
    },[])
     
    console.log(repo)
     
     return (
       <div className="App">
         <table>
           <thead>
             <tr>
               <th scope="col">ID</th>
               <th scope="col">NAME</th>
               <th scope="col">DESCRIPTION</th>
               <th scope="col">LANGUAGE</th>
               <th scope="col">CREATED</th>
               <th scope="col">UPDATED</th>
               <th scope="col">PUSHED</th>
             </tr>
           </thead>
           {
             repo.map((repo)=>{
               return (
           <tbody>
             <tr>
               <th scope="row">{repo.id}</th>
               <td>
               <a href={repo.html_url}>
                {repo.name}
                </a>
                </td>
               <td>{repo.description}</td>
               <td>{repo.language}</td>
               <td>{repo.created_at}</td>
               <td>{repo.updated_at}</td>
               <td>{repo.pushed_at}</td>
             </tr>
           </tbody>
   
               )
             })
           }
         </table>
       </div>
     );
}
