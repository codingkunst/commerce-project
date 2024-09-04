import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  const apiUrl = import.meta.env.VITE_SERVER_URL;

  const [product, setProduct] = useState(null);
  const param = useParams();

  const getProductDetail = async () => {
    let url = `${apiUrl}/products/${param.id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, [])

  return (
    <Container>
      <Row>
        <Col className='flex justify-end'>
          <img className='w-80 m-2.5' src={product?.img} alt="Loading..." />
        </Col>

        <Col>
          <p className='m-2.5'>{product?.title}</p>
          <p className='m-2.5'>{product?.price}원</p>
          <Form.Select className='w-96 m-2.5'>
            <option>SIZE</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
          </Form.Select>
          <Button className='w-44 m-2.5' variant="secondary">장바구니 담기</Button>
          <Button className='w-44 m-2.5' variant="dark">바로 구매하기</Button>
        </Col>
      </Row>

    </Container>
  )
}

export default ProductDetail