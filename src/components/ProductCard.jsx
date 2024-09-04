import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {

  const navigate = useNavigate();

  function showDetail () {
    navigate(`product/${props.item.id}`);
  }

  return (
    <div onClick={showDetail}>
      <img src={props.item?.img} alt="Loading..." />
      <div>{props.item?.choice === true ? "Conscious Choice" : ""}</div>
      <div>{props.item?.title}</div>
      <div>{props.item?.price}</div>
      <div>{props.item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard