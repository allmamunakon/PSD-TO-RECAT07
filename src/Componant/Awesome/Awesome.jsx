import React from 'react'
import './Awesome.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPinterestSquare } from "@fortawesome/free-brands-svg-icons"
import {faGooglePlus } from "@fortawesome/free-brands-svg-icons"

import { faMobileRetro } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Awesome() {
  return (
    <div className='container'>
        <div className=''>
            <h1 className='text-uppercase fs-4'>Awesome Team</h1>
            <div><img src={ require('../1Menu/MP1.png')} height='5' width='110'  alt='mamun'/></div>

        </div>
        <div className='row pt-5'>
            <div className='d-flex'>
                <div className=' boll col-lg-4'>
                    <div className='blackbool'>

                    </div>
                    <div className=''>
                        <h5 className='pt-4 '>Jimmy Letterman </h5>
                        <h5 className='pb-4'> Marketer</h5>

                    </div>
                    <div className='icon me-3'>
                   <i><FontAwesomeIcon icon={faTwitter} size="xl"  /></i> 
                   <i> <FontAwesomeIcon icon={faFacebook} size="lg" /></i> 
                   <i> <FontAwesomeIcon icon={faPinterestSquare} size="lg" /></i> 
                    </div>
                </div>


                <div className=' boll col-lg-4'>
                    <div className='blackbool'>

                    </div>
                    <div className=''>
                        <h5 className='pt-4 '>Jimmy Letterman </h5>
                        <h5 className='pb-4'> Marketer</h5>

                    </div>
                    <div className='icon me-3'>
                   <i><FontAwesomeIcon icon={faTwitter} size="xl"  /></i> 
                   <i> <FontAwesomeIcon icon={faFacebook} size="lg" /></i> 
                   <i> <FontAwesomeIcon icon={faPinterestSquare} size="lg" /></i> 
                    </div>
                </div>


                <div className=' boll col-lg-4'>
                    <div className='blackbool'>

                    </div>
                    <div className=''>
                        <h5 className='pt-4 '>Jimmy Letterman </h5>
                        <h5 className='pb-4'> Marketer</h5>

                    </div>
                    <div className='icon me-3'>
                   <i><FontAwesomeIcon icon={faTwitter} size="xl"  /></i> 
                   <i> <FontAwesomeIcon icon={faFacebook} size="lg" /></i> 
                   <i> <FontAwesomeIcon icon={faPinterestSquare} size="lg" /></i> 
                    </div>
                </div>


            </div>
            <div className='bcon pt-4 fs-5'>
        <p>Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit .</p>
        <p>aenean rhoncus posuere odio in tincidunt proin iaculis</p>
            </div>
  <div className='d-flex bla text-light pt-5'>
                <div className="col-lg-6">
                    <h1 className='text-start'>Contact Us</h1>
                    <p className='text-start'>Don’t be shy, drop us an email and say hello! We are a really nice 
                        bunch of people :)</p>
                        <div className='Contact1 text-start'>
                            <div className='d-flex'>
                            <div className='mob d-flex'>
                            <FontAwesomeIcon icon={faMobileRetro} size="lg" /><p className='ps-3'>(416) 555-0000</p>
                            </div>
                            <div className='tu d-flex ps-5 ms-5'>
                            <FontAwesomeIcon icon={faTwitter} size="xl"  />   <p className='ps-3'>@dreams</p>
                            </div>
                            </div>


                            <div className='d-flex ms-'>
                            <div className='mob d-flex'>
                            <FontAwesomeIcon icon={faEnvelope} size="lg" /> <p className='ps-3'>hello@dreams.com</p>  
                            </div>
                            <div className='tu d-flex ms-5 ps-3'>
                            <FontAwesomeIcon icon={faFacebook} size="lg" />   <p className='ps-3'>facebook.com/dreams</p>
                            </div>
                            </div>
                            <div className='d-flex ms-'>
                            <div className='mob d-flex'>
                            <FontAwesomeIcon icon={faPinterestSquare} size="lg" /><p className='ps-3'>pinterest.com/dreams</p>  
                            </div>
                            <div className='tu d-flex ms-5'>
                            <FontAwesomeIcon icon={faGooglePlus} size="lg" />  <p className='ps-3'>@dreams</p>
                            </div>
                            </div>
                            
                           
                           
                        
                       
                     

                  
                        </div>

                </div>
                
                <div className="col-lg-6 ">
               
  <div className="form-group d-flex">
    <label for="" >Email address</label>
    <input type="email" className="form-control ms-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group d-flex pt-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control ms-5 " id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check d-flex pt-3">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>

                </div>
            </div>
        </div>



    </div>
    
  )
}

export default Awesome;
