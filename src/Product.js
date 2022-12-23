import React, { useEffect, useState} from "react";
import ProductNav from "./components/ProductNav";
import ProductCard from "./components/ProductCard";
import './Product.css'
import Search from "./components/Search";

const Product = ({handlerGetClickedItem}) => {
  // handling add to cart
  const [products, setProducts] = useState([""]);
  
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((r) => r.json())
      .then((products) => setProducts(products))
  },[]);

  // handling search
const [filter, setFilter] = useState("")
  
let filteredProducts = products.filter((product) => {
let result = product.name === filter
return result
})

const newArr = filter ? filteredProducts : products




return (
  <>
    <div>
    <ProductNav />
    </div>

<div className="container">
        <h2>View our available products</h2>
        <Search filter={filter} onSetFilter={setFilter}/>
        <div className="cardinfo">
          {newArr.map((product) => (
         (<ProductCard handleClickedItem={handlerGetClickedItem} product={product} key={product.id}/>)
          ))}
        </div>
    </div>
  </>
)

}
export default Product;