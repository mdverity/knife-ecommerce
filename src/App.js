import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { CssBaseline } from '@material-ui/core'
import {
  Products,
  Navbar,
  Cart,
  Checkout,
  Home,
  About,
  Contact,
} from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles'
import Footer from './components/Footer/Footer'

let theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#DAECE7',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#1D282A',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.secondary.main
    },
  },
})

theme = responsiveFontSizes(theme)

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productID, quantity) => {
    const { cart } = await commerce.cart.add(productID, quantity)

    setCart(cart)
  }

  const handleUpdateCartQty = async (productID, quantity) => {
    const { cart } = await commerce.cart.update(productID, { quantity })

    setCart(cart)
  }

  const handleRemoveFromCart = async (productID) => {
    const { cart } = await commerce.cart.remove(productID)

    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()

    setCart(cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      )

      setOrder(incomingOrder)
      setErrorMessage('')
      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route exact path='/'>
            <Home products={products} />
          </Route>

          <Route path='/about'>
            <About products />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route exact path='/store'>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>

          <Route exact path='/cart'>
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>

          <Route exact path='/checkout'>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
        <Footer products={products} />
      </ThemeProvider>
    </Router>
  )
}

export default App
