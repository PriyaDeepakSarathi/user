import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Pagination,PageItem,Card,Container} from 'react-bootstrap';

const UserList2=()=>{
const[users2,setUsers2]=useState([]);
const[loading,setLoading]=useState(true);

const fetchUser1=async()=>{
    setLoading(true)
try{
    const response= await fetch('https://reqres.in/api/users?page=2');
    const  list= await response.json();
    const users2=list.data;
    setUsers2(users2);
    setLoading(false);
    console.log(users2);
}
catch(error){
    setLoading(false);
    console.log(error);
  }
}
useEffect(()=>{
fetchUser1();
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
       {users2.map(user2=>{
   /*   const{id,email,first_name,last_name,avatar}=user2; */
{
     return (<>
    <tr key={user2.id}>
      <td>{user2.id}</td>
      <td><img src={user2.avatar} alt="" /></td>
      <td>{user2.first_name}</td>
      <td>{user2.last_name}</td>
      <td>{user2.email}</td>
    </tr>
     </> )}})}
    </tbody>
    </Table>



              

       
        </Container>)
   



}
export default  UserList2;