import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  emailInput: {
    width: '100%',
  },

  footerList: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },

  footerLink: {
    color: '#DAECE7',
    textDecoration: 'none',
    marginTop: '.5rem',
    paddingLeft: '.1rem',
    width: 'fit-content',
    // backgroundImage:
    //   'linear-gradient(to right, #DAECE7 0%, rgba(255,255,255,0) 0%)',
    // backgroundPosition: 'bottom',
    // backgroundSize: 'auto 1px',
    // backgroundRepeat: 'repeat-x',

    transition: '0.2s all ease-in-out',

    '&::before': {
      content: '"• "',
      borderBottom: '1px solid rgba(0,0,0,0)',
    },

    '&:hover': {
      transform: 'scale(1.2)',
      textShadow: '0px 0px 3px rgba(255,255,255,0.25)',
    },

    [theme.breakpoints.down('sm')]: {
      marginInline: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      marginInline: '0',
    },
  },

  tweetBox: {
    height: 'fit-content',
    padding: '10px',

    [theme.breakpoints.down('sm')]: {
      marginBlock: '3rem',
      paddingRight: '0',
    },
    [theme.breakpoints.up('md')]: {
      marginBlock: '0',
      paddingRight: '20px',
    },
  },

  footerSignature: {
    paddingTop: '3rem',
    paddingBottom: '10px',

    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '0',
    },
  },

  formWrapper: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '10px',
    },
  },

  footerForm: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '500px',
      marginInline: 'auto',
    },
  },
}))
