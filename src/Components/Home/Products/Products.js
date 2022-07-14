import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProduct } from '../../Redux/actions/productActions'
import ProductCard from './ProductCard'

function Products() {
    const products = useSelector((state) => state.allProducts.products)
    const {category,description,image,price,title} = products
    const dispatch = useDispatch()
    const fetchProduct = async () => {
        const {data} = await axios.get('https://fakestoreapi.com/products')  
        dispatch(setProduct(data))
    }
    useEffect(() => {
      fetchProduct()
    }, [])
    
    
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
        {
            products.map(product =><ProductCard product={product}/>)
        }
    </div>
  )
}

export default Products