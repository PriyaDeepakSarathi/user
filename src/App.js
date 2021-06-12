import React from 'react';
import "axios";
import UserList1 from './UserList1';
import UserList2 from './UserList2';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Pagination,PageItem,Card} from 'react-bootstrap';


function App(){
return(
  <div>
   
 <Router>
  <Switch>
    
      <Route exact path='/list1' component={UserList1}/>
      <Route exact path='/list2' component={UserList2}/>
    
  </Switch>
   </Router>

    <Pagination className='justify-content-center'>
     <Pagination.Item a href="http://localhost:3000/list1">1</Pagination.Item>
  <Pagination.Item a href="http://localhost:3000/list2">2</Pagination.Item>
  </Pagination>  


  </div>
)

}
export default App;
