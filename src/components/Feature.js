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

    <h1>Popular Orders</h1>

    <div className='popular-orders-section'>
        <div className="cards1">
        <img className="card-img-top1" src="https://media.istockphoto.com/id/1450575816/photo/tomato-isolated-tomatoes-on-white-background-three-tomatoes%C2%A0side-view-with-clipping-path-full.jpg?s=612x612&w=0&k=20&c=rLgvMDJkCKD3_BzYYgJ9kq7MVZQw7xx5F3DpbudALNc=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Vegetables</h4>
            </div>
          </div>

          <div className="cards1">
          <img className="card-img-top1" src="https://media.istockphoto.com/id/1335378400/photo/two-slices-of-mutton-meat-isolated-on-white-top-view-of-mutton-steaks.jpg?s=612x612&w=0&k=20&c=Nh_PfHTepVWaSDqj4obATe0LURnACRbL09MCEWI90no=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Meat</h4>
            </div>
          </div>

          <div className="cards1">
            <img className="card-img-top1" src="https://media.istockphoto.com/id/1257544647/photo/pile-of-assorted-wild-fresh-berries-isolated-on-white-background-top-view.jpg?s=612x612&w=0&k=20&c=2_Ibp5DrSj81dqrG8QNbJShCMD-pM1Cc68iX9xi1XpQ=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Fruits</h4>
            </div>
          </div>
          <div className="cards1">
            <img className="card-img-top1" src="https://media.istockphoto.com/id/157282194/photo/milk.jpg?s=612x612&w=0&k=20&c=g89907smoF9BOJpr66rbb0rbixzSJh8MqQDZ416fhf0=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Milk</h4>
            </div>
          </div>
          <div className="cards1">
            <img className="card-img-top" src="https://media.istockphoto.com/id/185241719/photo/fresh-whole-salmon.jpg?s=612x612&w=0&k=20&c=8bZww37M1-x-2nOSG0muxvGThdF1V01Tur-_sDdq02k=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Fish</h4>
            </div>
          </div>
          <div className="cards1">
            <img className="card-img-top1" src="https://media.istockphoto.com/id/1195903112/photo/glass-jar-with-a-tube-with-freshly-squeezed-orange-juice-stands-on-a-white-background-next-to.jpg?s=612x612&w=0&k=20&c=cH7MgFFsdASbGIxdm3S_idXR0ka2uQ07FfAnB9fqaXU=" alt="" />
            <div className="card-body">
              <h4 className="card-title">Fruit Juices</h4>
            </div>
          </div>
    </div>


      



    <h1>Customer Reviews</h1>

    <div className='customer-review'>

      {/* <div className="cards">
            <div className="card-body">
              <h4 className="card-title">Pricilla Jane</h4>
              <p className="card-text ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div> */}
          <div className="cards2">
        {/* <img className="card-img-top" src="https://media.istockphoto.com/id/1175842011/vector/human-hands-hold-eco-basket-full-of-vegetables-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fPCkvMTY_nu6j0Jk47UTPCPzcTkty70f4BKM3IyaxFk=" alt="" /> */}
            <div className="card-body">
              <h4 className="card-title2">Peter Makini</h4>
              <p className="card-text ">
                " I have had a good experience purchasing my groceries from Vegmart. The customer experience is top-notch as I have always been attended to, responded to and assisted whenever I faced any problems. Their products are fresh and healthy. 
                I have experienced many benefits healthwise and I urge everyone to consider products from Vegmart as they will not regret. "</p> 
            </div>
          </div>
          <div className="cards2">
        {/* <img className="card-img-top" src="https://media.istockphoto.com/id/1175842011/vector/human-hands-hold-eco-basket-full-of-vegetables-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fPCkvMTY_nu6j0Jk47UTPCPzcTkty70f4BKM3IyaxFk=" alt="" /> */}
            <div className="card-body">
              <h4 className="card-title2">Aurelia Sarah</h4>
              <p className="card-text ">
             " I have had a good experience purchasing my groceries from Vegmart. The customer experience is top-notch as I have always been attended to, responded to and assisted whenever I faced any problems. Their products are fresh and healthy. 
                I have experienced many benefits healthwise and I urge everyone to consider products from Vegmart as they will not regret. "</p> 
            </div>
          </div>


    </div>
    </div>
  )
}

export default Feature