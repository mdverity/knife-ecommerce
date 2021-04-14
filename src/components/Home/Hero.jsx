import React, { useState } from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, TextField } from '@material-ui/core'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Hero = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'hero-signup', email }),
    })
      .then(() => {
        setEmail('')
        alert('Thanks! We added you to our newsletter.')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Grid item xs={12} md={8}>
        <Grid item xs={12} className={classes.heroImage} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item xs={12} className={classes.topHeaderWrap}>
          <Typography variant='h2' className={classes.heroTitleLight}>
            ナイフナイフ
          </Typography>
          <Typography variant='h2' className={classes.heroTitleDark}>
            KNIFTY
          </Typography>
          <Typography variant='h2' className={classes.heroTitleDarkTwo}>
            KNIFE
          </Typography>

          <Grid
            container
            direction='column'
            justify='flex-end'
            alignItems='flex-end'
            className={classes.headerTextWrap}
          >
            <Typography variant='h4' className={classes.subTextLight}>
              青神スーパー
            </Typography>
            <Typography variant='h4' className={classes.subTextDark}>
              Aogami super.
            </Typography>

            <Typography variant='h4' className={classes.subTextLight}>
              最高の鍛造
            </Typography>
            <Typography variant='h4' className={classes.subTextDark}>
              Top quality forging.
            </Typography>

            <Typography variant='h4' className={classes.subTextLight}>
              海外発送
            </Typography>
            <Typography variant='h4' className={classes.subTextDark}>
              Worldwide shipping.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: '40vh',
            background: '#1D282A',
            position: 'relative',
            boxShadow: 'inset 0px 4px 100px 100px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <form
              className={`${classes.rootInput} netlify`}
              onSubmit={handleSubmit}
            >
              <input type='hidden' name='form-name' value='hero-signup' />
              <Typography
                variant='h5'
                color='primary'
                align='center'
                style={{
                  marginInline: 'auto',
                  paddingBottom: '1rem',
                }}
              >
                Sign up for the{' '}
                <span
                  style={{
                    fontWeight: '500',
                    borderBottom: '1px dashed#DAECE7',
                    whiteSpace: 'nowrap',
                  }}
                >
                  best deals
                </span>
                !
              </Typography>
              <TextField
                type='email'
                label='Your Email'
                variant='filled'
                className={classes.emailInput}
                name='hero-email'
                id='hero-email'
                margin='dense'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                InputProps={{
                  style: { background: '#DAECE7' },
                }}
                InputLabelProps={{
                  style: { color: '#1D282A' },
                }}
              />
              <Button
                variant='contained'
                type='submit'
                style={{ marginInline: 'auto', marginTop: '1rem' }}
                color='primary'
              >
                Sign Up
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Hero
