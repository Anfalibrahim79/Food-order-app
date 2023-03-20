import React from 'react'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <div>
      <div className="card glass">
        <div className="card-body">
          <h2 className="card-title">Address</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <Link to={'/account/add-address'} className="btn btn-primary">Add Address</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address