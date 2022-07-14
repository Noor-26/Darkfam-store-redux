import React from 'react'

function ProductCard({product}) {
    const {category,description,image,price,title} = product
  return (
    <div class="card  bg-base-100 shadow-xl">
  <figure className="bg-white"><img src={image} className="h-[200px] " alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description.slice(0,50)}...</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard