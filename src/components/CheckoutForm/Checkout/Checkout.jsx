import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { commerce } from '../../../lib/commerce'
import { motion } from 'framer-motion'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from '@material-ui/core'

const steps = ['Shipping Address', 'Payment Details']

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [isFinished, setIsFinished] = useState(false)
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        })

        // console.log(token)
        setCheckoutToken(token)
      } catch (error) {
        // console.log(error)
        if (activeStep !== steps.length) history.push('/')
      }
    }

    generateToken()
  }, [cart.id, history, activeStep])

  const nextStep = () => setActiveStep((prev) => prev + 1)
  const prevStep = () => setActiveStep((prev) => prev - 1)

  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true)
    }, 3000)
  }

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant='h5'>
            Thank you for your purchase, {order.customer.firstname}.
          </Typography>
          <Divider className={classes.divider} />
          <Typography gutterBottom variant='subtitle1'>
            We've sent a reciept of your order to:{' '}
            <span style={{ fontWeight: 500 }}>{order.customer.email}</span>
          </Typography>
          <Typography variant='subtitle2'>
            Order number: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} to='/' variant='outlined' type='button'>
          Back to Home
        </Button>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant='h5'>
            Thank you for your (real) purchase!
          </Typography>
          <Divider className={classes.divider} />
        </div>
        <br />
        <Button component={Link} to='/' variant='outlined' type='button'>
          Back to Home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress color='secondary' />
      </div>
    )

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant='h5'>Looks like we ran into an error.</Typography>
        <Typography variant='h6'>{error}.</Typography>
        <br />
        <Button component={Link} variant='outlined' type='button' to='/cart'>
          Back to Cart
        </Button>
      </>
    )
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        prevStep={prevStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
        timeout={timeout}
      />
    )

  return (
    <motion.main
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className={classes.content}
    >
      <CssBaseline />
      <div className={classes.toolbar} />
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </div>
    </motion.main>
  )
}

export default Checkout
