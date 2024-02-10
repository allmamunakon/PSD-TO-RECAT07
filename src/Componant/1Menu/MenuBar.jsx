import React from 'react'
import '../1Menu/MenuBar.css';

function MenuBar() {
  return (
    <div className='pb-5'>
       
        <div className='row'>
        <div className='MenuBar1'>
       <div className="  MenuBar2  ">
       <div className='container d-flex justify-content-between align-items-center'>
       <div className='Logo'>
        
        <h1 className=''> Dreams</h1>
         </div>
<div className='Menu'>
   <uL className='list-unstyled  '>
    <li className='text-decoration-none'><a href='https://www.youtube.com/watch?v=Jo_PLMDbfsg'>Home</a></li>
    <li><a href='#'>Services</a></li>
    <li><a href='#'>Portfolio</a></li>
    <li><a href='#'>About</a></li>
    <li><a href='#'>Team</a></li>
    <li><a href='#'>Contact</a></li>
</uL>    
       </div>

       </div>
       <div className='build'>Build the website of <br/> your dreams  </div>
       <div><img src={ require('../1Menu/MP1.png')} height='5' width='110'  alt='mamun'/></div>
       <div className='digital'>We are a digital agency that believes in building <br/>
things that are  meaningful!</div>
      
       </div>
            
            

        </div>
       
        </div>
    </div>
  )
}

export default MenuBar;
