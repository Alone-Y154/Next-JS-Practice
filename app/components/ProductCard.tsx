import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css' //css module in next - converts the css classes into objects

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart/>
    </div>
  )
}

export default ProductCard