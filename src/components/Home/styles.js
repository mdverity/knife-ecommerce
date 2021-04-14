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
    background: `radial-gradient(44.95% 44.95% at 72.73% 66.41%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%), url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',

    [theme.breakpoints.down('sm')]: {
      height: '66.6vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
  },

  showcaseImage: {
    backgroundImage: `radial-gradient(34.41% 36.02% at 53.67% 57.09%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%), url(${showcaseImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
      height: '65vh',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right',
      height: '100vh',
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
    opacity: '0.5',
    fontWeight: '400',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('xs')]: {
      left: '2%',
      top: '6%',
      fontSize: '26px',
    },
    [theme.breakpoints.up('sm')]: {
      left: '5%',
      top: '12%',
    },
  },

  heroTitleDark: {
    position: 'absolute',

    fontWeight: '400',

    [theme.breakpoints.down('xs')]: {
      left: '2.5%',
      top: '19%',
      fontSize: '26px',
    },
    [theme.breakpoints.up('sm')]: {
      left: '5%',
      top: '21%',
    },
  },

  heroTitleDarkTwo: {
    position: 'absolute',
    fontWeight: '400',
    top: '30%',

    [theme.breakpoints.down('xs')]: {
      left: '10%',
      fontSize: '26px',
    },
    [theme.breakpoints.up('sm')]: {
      left: '19.5%',
    },
  },

  subTextLight: {
    opacity: '0.5',
    fontWeight: '300',

    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },

  subTextDark: {
    fontWeight: '300',
    marginBottom: '1rem',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
    },
  },

  headerTextWrap: {
    paddingRight: '20px',

    [theme.breakpoints.down('sm')]: {
      marginTop: '2.5rem',
    },
    [theme.breakpoints.down('lg')]: {
      paddingRight: '5px',
    },
  },

  topHeaderWrap: {
    background: '#DAECE7',
    // boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    display: 'flex',
    overflowX: 'hidden',

    [theme.breakpoints.down('sm')]: {
      height: 'fit-content',
      minHeight: '40vh',
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

    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },

    [theme.breakpoints.up('sm')]: {
      width: '600px',
    },
  },

  cardContent: {
    position: 'absolute',
    zIndex: '3',
    background: 'rgba(29, 40, 42, 0.5)',
    width: '100%',
    textAlign: 'center',
    color: '#e9e9e9',
  },

  showcaseText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      paddingBlock: '.5rem',
    },
  },
}))
