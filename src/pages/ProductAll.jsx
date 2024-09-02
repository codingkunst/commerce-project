import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

const ProductAll = () => {
  const apiUrl = import.meta.env.VITE_SERVER_URL;

  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `${apiUrl}/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data: ', data);
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Container>
      <Row>
        {productList.map((item) => (
          <Col lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductAll