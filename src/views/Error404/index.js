import React from 'react'

export default function index() {
  return (
    <div className="container">
      <div className="error-page page page-center mt-5">
        <div className="text-center">
          <i className="far fa-exclamation-triangle"></i>
          <div className="display-1 my-4">404</div>
          <div className="display-4 my-4">Not Found</div>
          <h6>The resource requested could not be found on this server!</h6>
        </div>
      </div>
    </div>
  )
}
