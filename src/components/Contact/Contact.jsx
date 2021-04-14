import React, { useState } from 'react'
import useStyles from './styles'
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    // console.log(e)
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('yeet')

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'footer-signup', ...values }),
    })
      .then(() => {
        setValues({
          name: '',
          email: '',
          message: '',
        })
        alert("Thanks! We'll be in touch.")
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container>
        <Typography
          variant='h2'
          style={{ marginBottom: '10rem', borderBottom: '5px solid #B8C6C8' }}
        >
          Contact Us
        </Typography>
      </Container>
      <Container maxWidth='lg'>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} align='center'>
            <Typography variant='h4' color='secondary'>
              Want us to add your knife
              <br />
              to our collection?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} align='center'>
            <Typography variant='h4' color='secondary'>
              Or looking for something
              <br />
              super specific?
            </Typography>
          </Grid>
          <Grid item xs={12} align='center'>
            <Typography variant='h3' color='secondary'>
              Contact us directly!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='sm' style={{ marginTop: '2rem' }}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <Grid container align='center' spacing={2}>
            <Grid item sm={6}>
              <TextField
                id='contact-name'
                label='Name'
                name='name'
                value={values.name}
                type='text'
                onChange={handleChange}
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id='contact-email'
                label='Email'
                name='email'
                type='email'
                value={values.email}
                onChange={handleChange}
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='contact-message'
                name='message'
                label='Message'
                multiline
                rows={5}
                value={values.message}
                onChange={handleChange}
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit' color='secondary'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </main>
  )
}

export default Contact
