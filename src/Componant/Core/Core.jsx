import React from 'react'
import './Core.css'

function Core() {
  return (
    <div className=' container pb-5'>

        <div className='Core'>
            <h1>Core Services</h1>
            <div className='pb-5'><img src={ require('../Core/MP1.png')} height='5' width='110'  alt='mamun'/>
            
            </div>

        </div>
<div className='row'>
    <div className='core justify-content-lg-between'>
        <div className='bbb col-lg-4 border-5 border border-dark-subtle'>
        <img src={ require('../Core/MP2.png')} height='60' width='60'  alt='mamun'/>
        <h2 className='pt-3 text-uppercase'>Beautiful Designs</h2>
        <p className='fs-5'>Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in. Iaculis purus digni.
            </p>
        </div>

        <div className='bbb col-lg-4 border-5 border border-dark-subtle '>
        <img src={ require('../Core/MP3.png')} height='60' width='60'  alt='mamun'/>
        <h2 className='pt-3 text-uppercase'>Beautiful Designs</h2>
        <p className='fs-5'>Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in. Iaculis purus digni.
            </p>
        </div>

        <div className='bbb col-lg-4 border-5 border border-dark-subtle '>
        <img src={ require('../Core/MP4.png')} height='60' width='60'  alt='mamun'/>
        <h2 className='pt-3 text-uppercase'>Beautiful Designs</h2>
        <p className='fs-5'>Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in. Iaculis purus digni.
            </p>
        </div>

    </div>

</div>
      
    </div>
  )
}

export default Core;
