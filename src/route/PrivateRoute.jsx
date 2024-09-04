import React from 'react'
import ProductDetail from '../pages/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
  return (
    props.authenticate === true ? <ProductDetail /> : <Navigate to='/login' />
  )
}

export default PrivateRoute