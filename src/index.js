import React, { useState } from 'react';
import { render } from "react-dom";
import Nav from 'react-bootstrap/Nav';
import Tabs from './Tabs';
import VerticalTabs from './vertical';

require('./styles.css');


const divStyle = {
    display: 'flex',
    alignItems: 'center'
  };
  
function App() {
    
  return (
    <div>
      <App2/>
    </div>
    
  );
}





  function App2() {
    let [showNavtor,setShowNavtor] = useState(false);
    return (
    <div >
        <div class='row'>
         <div class='column'>
      
        
        <h1>About the MDS Broker</h1>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960s with the release of 
               Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
        <div class="firstpart">
        <Tabs>
              
        <div label="Data Providers">
  
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link onClick={()=>setShowNavtor(true)} >Navtor</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  onClick={()=>setShowNavtor(true)}>Neuron</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  onClick={()=>setShowNavtor(true)}>Whilhelmsen</Nav.Link>
          </Nav.Item>
        </Nav>
       
      
          </div>
  
          <div label="Data Consumers">
          <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link onClick={()=>setShowNavtor(true)}>Veracity DNV</Nav.Link>
          </Nav.Item>
          </Nav>
     
         
          </div>
         
        </Tabs>
        </div> 
      
    </div>
    <div class='column'>
    {console.log(showNavtor)}
        {
            showNavtor &&  <VerticalTabs />
        }
    </div>
  </div>
      
      
      </div>
    );
  }
  

const container = document.createElement('div');

document.body.appendChild(container);

render(<App />, container);



