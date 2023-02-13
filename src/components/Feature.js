import React from 'react'
import '../Feature.css'

const Feature = () => {
  return (

    <div className='feature'>
        <h1>Our Features</h1>
    <div className='new-feature'>
        <div className="cards">
        <img className="card-img-top" src="https://media.istockphoto.com/id/1175842011/vector/human-hands-hold-eco-basket-full-of-vegetables-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fPCkvMTY_nu6j0Jk47UTPCPzcTkty70f4BKM3IyaxFk=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Freshly Organic</h4>
              <p className="card-text ">
              Offering fresh farm produce with natural and certified goods </p>
            </div>
            <button type='button' className='about-button'>Learn More</button>
          </div>

          <div className="cards">
          <img className="card-img-top" src="https://media.istockphoto.com/id/1357708631/vector/3d-shopping.jpg?s=612x612&w=0&k=20&c=W2CDw3kwfhuF0YCmus80upLoMcBiyRDsp-zPUxbV7lU=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Easy Purchase</h4>
              <p className="card-text ">
              Simplified user interface for easy navigation in the user journey </p>
            </div>
            <button type='button' className='about-button'>Learn More</button>
          </div>

          <div className="cards">
            <img className="card-img-top" src="https://media.istockphoto.com/id/1356259752/vector/delivery-man-motorbike-logo-icon-scooter-bike-vector-icon-express-free-delivery.jpg?s=612x612&w=0&k=20&c=b8lgqVnQEQ3WnfiwyX08yhCck4VuqM9N6BHAaOucILc=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Quick Delivery</h4>
              <p className="card-text ">
              Fast paced delivery at your your door step with extra free services</p>
            </div>
            <button type='button' className='about-button'>Learn More</button>
          </div>
    </div>

    <h1>Customer Reviews</h1>

    <div className='customer-review'>

      <div className="cards">
        {/* <img className="card-img-top" src="https://media.istockphoto.com/id/1175842011/vector/human-hands-hold-eco-basket-full-of-vegetables-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fPCkvMTY_nu6j0Jk47UTPCPzcTkty70f4BKM3IyaxFk=" alt="" /> */}
            <div className="card-body">
              <h4 className="card-title">Pricilla Jane</h4>
              <p className="card-text ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            {/* <button type='button' className='about-button'>Learn More</button> */}
          </div>
          <div className="cards">
        {/* <img className="card-img-top" src="https://media.istockphoto.com/id/1175842011/vector/human-hands-hold-eco-basket-full-of-vegetables-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fPCkvMTY_nu6j0Jk47UTPCPzcTkty70f4BKM3IyaxFk=" alt="" /> */}
            <div className="card-body">
              <h4 className="card-title">Peter Makini</h4>
              <p className="card-text ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            {/* <button type='button' className='about-button'>Learn More</button> */}
          </div>
          <div className="cards">
        {/* <img className="card-img-top" src="https://media.istockphoto.com/id/1175842011/vector/human-hands-hold-eco-basket-full-of-vegetables-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fPCkvMTY_nu6j0Jk47UTPCPzcTkty70f4BKM3IyaxFk=" alt="" /> */}
            <div className="card-body">
              <h4 className="card-title">Aurelia Sarah</h4>
              <p className="card-text ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            {/* <button type='button' className='about-button'>Learn More</button> */}
          </div>


    </div>
    </div>
  )
}

export default Feature