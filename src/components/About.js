import React from 'react'
import Navbar from './Navbar'
import '../About.css'

function About() {
  return (
    <>
    <Navbar/>
    <div className="about-container">
    <div className="about">
        <div className="content">
            <h2>What to know about us</h2>
            <div className="info">
                <p>
           VegMart is your one stop organic grocery store providing you with fresh farm products which are
           certified.This network of local organic groceries store promotes ecological agriculture.We sell good 
           quality, pesticide free groceries.<br/> VegMart application makes it easier for consumers to get access 
           to the best organic goods.<br/>Connecting you with the best farmers as we offer <b>fresh vegetables, fruits and dairy!
            
           </b>

                </p>
            </div>
        </div>
        <div className='image'>
            <img src="https://thumbs.dreamstime.com/b/harvest-fresh-vegetables-baskets-21019859.jpg" alt="vegetable basket"></img> 
            <img src="https://thumbs.dreamstime.com/b/milkshakes-smoothies-assortment-wooden-table-72553947.jpg" alt="fruit smoothies"></img>
            <img src="https://thumbs.dreamstime.com/b/organic-dairy-products-selection-cheese-88837172.jpg" alt="dairy products"></img>
        </div>
    </div>
</div>
</>
)
}
  


export default About