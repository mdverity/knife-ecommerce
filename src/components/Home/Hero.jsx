import React from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, TextField } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'

const Hero = () => {
  const classes = useStyles()

  const useStylesInput = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#DAECE7',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#e9e9e9',
      },
      '&$focused': {
        backgroundColor: '#B8C6C8',
        boxShadow: `${fade(theme.palette.text.primary, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.text.primary,
      },
    },
    focused: {},
  }))

  function CustomTextField(props) {
    const classes = useStylesInput()

    return (
      <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
    )
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
            <form className={classes.rootInput} autoComplete='off'>
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
              <CustomTextField
                label='Your Email'
                type='email'
                className={classes.emailInput}
                variant='filled'
                id='hero-email-input'
                // minWidth='50%'
                InputLabelProps={{
                  style: { color: '#1D282A' },
                }}
              />
              <Button
                variant='contained'
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
