import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="flex card glass">
        <div className="card-body">
          <h2 className="card-title">Account Information</h2>
          <hr/>
          <div className='flex flex-col '>
           
            <h3>Name : <span> Name</span></h3>
            
            <h3>Email : <span> Email</span></h3>
            

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Profile