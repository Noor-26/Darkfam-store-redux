import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { selectedProduct,removeSelectedProduct } from '../../Redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Loading from '../../Loading/Loading'

function SelectedProduct() {
  const {productId} = useParams()
  const product = useSelector((state) => state.product ) 
  const {category,description,image,price,title} = product

  const dispatch = useDispatch()
  const fetchProduct = async () => {
    const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`)  
      dispatch(selectedProduct(data))
  }
  useEffect(() => {
    if (productId && productId !== '') fetchProduct()
   return () => (
    dispatch(removeSelectedProduct())
   )
  }, [productId])
if(Object.keys(product).length === 0) {
  return <Loading/> 
}
  return (
    <div>
      <h1 className='text-center text-5xl '>Buy this Product!</h1>
      <div class="card lg:card-side bg-base-100 shadow-xl m-6">
  <figure className="w-[100vw] bg-white"><img src={image} className=' h-[70vh]' alt="Album"/></figure>
  <div class="p-5 leading-7">
    <h2 class="card-title">{title}</h2>
    <p>{category}</p>
    <p>{price}</p>
    <p>{description}</p>
    <div>
      <button class="btn btn-primary mt-4">Buy now</button>

    </div>
  </div>
</div>
    </div>
  )
}

export default SelectedProduct