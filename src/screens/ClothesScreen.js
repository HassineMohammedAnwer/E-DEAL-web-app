import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ClothesScreen = () => {
  return (
    <>

      <h1>Products: Clothes</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
          </Col>
        ))}
      </Row>

    </>
  )
            }

export default ClothesScreen