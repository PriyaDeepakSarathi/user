import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Pagination,PageItem,Card,Container} from 'react-bootstrap';

const UserList1=()=>{
const[users,setUsers]=useState([]);
const[loading,setLoading]=useState(true);

const fetchUser=async()=>{
    setLoading(true)
try{
    const response= await fetch('https://reqres.in/api/users?page=1');
    const  list= await response.json();
    const users=list.data;
    setUsers(users);
    setLoading(false);
    console.log(users);
    
}
catch(error){
    setLoading(false);
    console.log(error);
  }
}
useEffect(()=>{
fetchUser();
},[])
    
    return(<Container >
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
       {users.map(user=>{
     const{id,email,first_name,last_name,avatar}=user;
{
     return (<>
        <tr key={id}>
      <td>{id}</td>
      <td><img src={avatar} alt="" /></td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
     </> )}})}
    </tbody>
    </Table>
        </Container>)
   }
export default  UserList1;