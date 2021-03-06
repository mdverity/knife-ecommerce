import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { motion } from 'framer-motion'
import Product from './Product/Product'
import useStyles from './styles'

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles()

  return (
    <motion.main
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className={classes.content}
    >
      <div className={classes.toolbar} />
      {/* <Grid container fluid style={{padding: '0'}}></Grid> */}
      <Container>
        <Grid container justify='center' spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.main>
  )
}

export default Products
