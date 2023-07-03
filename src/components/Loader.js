import React from 'react'
import loading from './loading.gif'
// className="card mx-4 my-4" style={{boxShadow :'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', height: 'auto'
const Loader = ()=>{ 
    return (
      <div className='text-center ' >
        <img style={{height: 40}}  src={loading} alt="loading"  />
      </div>
    )
}

export default Loader