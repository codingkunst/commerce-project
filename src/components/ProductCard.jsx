import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
      <img src={props.item?.img} alt="Loading..." />
      <div>{props.item?.choice === true ? "Conscious Choice" : ""}</div>
      <div>{props.item?.title}</div>
      <div>{props.item?.price}</div>
      <div>{props.item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard