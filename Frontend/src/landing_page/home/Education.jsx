import React from 'react'

const Education = () => {
  return (
   <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt=""
            style={{ width: "70%" }}
          />

        </div>
        <div className="col-6">
          <h1 className="mb-5 mt-5 fs-2">Free and open market education</h1>

          <p className="mb-3 fs-5 ">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="" className='text-decoration-none'>Varsity <i class="fa-solid fa-arrow-right"></i></a>

          <p className="mb-3 mt-5 fs-5 ">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="" className='text-decoration-none'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education
