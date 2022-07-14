import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    const {category,description,image,price,title,id} = product
  return (
    <div class="card  bg-base-100 shadow-xl">
  <figure className="bg-white"><img src={image} className="h-[200px] " alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description.slice(0,50)}...</p>
    <p>Category : {category}</p>
    <p className="font-bold font-mono">Price : ${price}</p>
    <div class="card-actions justify-end">
     <Link to={`/product/${id}`}> <button class="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
  )
}

export default ProductCard