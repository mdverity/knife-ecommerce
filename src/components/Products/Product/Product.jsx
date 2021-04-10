import React, { useState } from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Dialog,
  Popover,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import Carousel from 'react-material-ui-carousel'

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleCartAdd = (event, product) => {
    setAnchorEl(event.currentTarget)
    onAddToCart(product.id, 1)
  }

  const itemAdded = Boolean(anchorEl)

  const productImages = product.assets.map((item) => item.url)

  console.log(productImages)
  // return <div>test</div>

  return (
    <>
      <Card className={classes.root}>
        <Carousel autoPlay={false}>
          {productImages.map((item, i) => (
            <CardMedia
              key={product.name + i}
              className={classes.media}
              image={item}
              title={product.name}
              onClick={handleOpenModal}
            />
          ))}
        </Carousel>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant='h5' gutterBottom>
              {product.name}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant='body2'
            color='textSecondary'
          >
            {/* {product.description.slice(3, 101) + '...'} */}
          </Typography>
          {/* /> */}
        </CardContent>

        <CardActions disableSpacing className={classes.cardActions}>
          <Typography variant='h5' style={{ paddingLeft: '10px' }}>
            {product.price.formatted_with_symbol}
          </Typography>
          <IconButton
            aria-label='Add to Cart'
            onClick={(event) => handleCartAdd(event, product)}
          >
            <AddShoppingCart />
          </IconButton>
          <Popover
            open={itemAdded}
            elevation={4}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>Item added!</Typography>
          </Popover>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        fullWidth={true}
        maxWidth='lg'
        className={classes.dialog}
      >
        <Carousel autoPlay={false}>
          {productImages.map((item, i) => (
            <img
              // key={product.name + i}
              className={classes.modalImage}
              src={item}
              alt={product.name}
              // title={product.name}
              // onClick={handleOpen}
            />
          ))}
        </Carousel>
      </Dialog>
    </>
  )
}

export default Product
