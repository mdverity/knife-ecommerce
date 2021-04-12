import { makeStyles } from '@material-ui/core/styles'
import heroImage from '../../assets/images/hero-image.jpg'
import showcaseImage from '../../assets/images/showcase-image.jpg'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },

  emailInput: {
    width: '100%',
  },

  heroImage: {
    height: '100vh',
    background: `radial-gradient(44.95% 44.95% at 72.73% 66.41%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%), url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
  },

  showcaseImage: {
    height: '100vh',
    backgroundImage: `radial-gradient(34.41% 36.02% at 53.67% 57.09%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%), url(${showcaseImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right',
    },
  },

  floatRight: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      order: '1',
    },
    [theme.breakpoints.up('md')]: {
      order: '2',
    },
  },

  floatLeft: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      order: '2',
    },
    [theme.breakpoints.up('md')]: {
      order: '1',
    },
  },

  root: {
    flexGrow: 1,
  },

  rootInput: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '65%',
  },

  heroTitleLight: {
    position: 'absolute',
    left: '10%',
    top: '10%',
    opacity: '0.5',
    fontWeight: '400',

    [theme.breakpoints.down('xs')]: {
      left: '2%',
    },
    [theme.breakpoints.up('sm')]: {
      left: '5%',
    },
  },

  heroTitleDark: {
    position: 'absolute',

    fontWeight: '400',

    [theme.breakpoints.down('xs')]: {
      left: '2.5%',
      top: '22%',
    },
    [theme.breakpoints.up('sm')]: {
      left: '5%',
      top: '19%',
    },
  },

  heroTitleDarkTwo: {
    position: 'absolute',
    fontWeight: '400',

    [theme.breakpoints.down('xs')]: {
      left: '10%',
      top: '33%',
    },
    [theme.breakpoints.up('sm')]: {
      left: '19.5%',
      top: '28%',
    },
  },

  subTextLight: {
    opacity: '0.5',
    fontWeight: '300',
  },

  subTextDark: {
    fontWeight: '300',
    marginBottom: '1rem',
  },

  headerTextWrap: {
    paddingRight: '20px',
    marginTop: '7.5rem',
  },

  topHeaderWrap: {
    background: '#DAECE7',
    boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      height: 'fit-content',
    },
    [theme.breakpoints.up('md')]: {
      height: '60vh',
    },
  },

  card: {
    height: '40vh',
    width: '100%',
    position: 'relative',
    borderRadius: '1px',
  },

  media: {
    height: '100%',
    width: '600px',
    // paddingTop: '56.25%', // 16:9
    transition: '.5s ease-out transform',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  cardContent: {
    position: 'absolute',
    zIndex: '3',
    background: 'rgba(29, 40, 42, 0.5)',
    width: '100%',
  },
}))
