import React from 'react';
import UserList from './UserList';


const Page =({email,first_name,last_name,avatar})=>{

               /*  return(<div key={id}>
                <Table striped bordered hover>
                     <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profile</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{id}</td>
      <td>{avatar}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
    </tbody>
    </Table>



              

        </div> ) */
     
        return(
            <div >
                  <img src={avatar} alt="" />
                <h2>{first_name}</h2>
                <h2>{last_name}</h2>
                <h4>{email}</h4> 
            </div>
        )


   


}
export default Page;