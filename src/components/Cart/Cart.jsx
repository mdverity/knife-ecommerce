import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'
import CartItem from './CartItem/CartItem'

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles()

  if (!cart.line_items) return 'Loading...'

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your cart currently.
      <br />
      <Link to='/' className={classes.link}>
        Try adding some!
      </Link>
    </Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
            {/* <div>{item.name}</div> */}
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to='/checkout'
            className={classes.checkoutButton}
            size='large'
            type='button'
            variant='contained'
            color='primary'
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <Container style={{ marginBottom: '2rem' }}>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant='h3' gutterBottom>
          Your Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </motion.div>
    </Container>
  )
}

export default Cart
