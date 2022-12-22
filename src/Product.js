import React, { useEffect, useState} from "react";
import { Container, Row, Col} from "react-bootstrap";
// import ProductNav from "./components/ProductNav";
import ProductCard from "./components/ProductCard";
// import './Product.css'

const Product = () => {
  const [products, setProducts] = useState([""]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((r) => r.json())
      .then((products) =>setProducts(products));
  }, []);

//   use POST for cart


return (
  <>
    <div>
    {/* <ProductNav /> */}
    </div>

<div className="cardinfo">
    {/* <Container>
        <Row> */}
          <h2>View our available products</h2>
          {products.map((product) => {
          // <Col xs={12} md={4}className='p-5'>
         return (<ProductCard product={product} key={product.id}/>)

          // </Col>
          })}
        {/* </Row>
    </Container>  */}
    </div>
  </>
)

}
export default Product;