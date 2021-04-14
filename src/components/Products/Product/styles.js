import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1),
  },

  root: {
    maxWidth: '100%',
    position: 'relative',
  },

  zoomIcon: {
    position: 'absolute',
    bottom: 'calc(25% - (2.5rem /2))',
    left: 'calc(50% - (2.5rem /2))',
    fontSize: '2.5rem',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '5px',
    zIndex: 5,
    opacity: 0,
    cursor: 'pointer',
    transition: '.5s ease-out opacity',
    // boxShadow: '0px 0px 5px rgba(0,0,0,0.5)',
    filter: 'drop-shadow( 0px 0px 3px rgba(0,0,0,1))',
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    transition: '.5s ease-out transform',

    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:hover .MuiSvgIcon-root': {
      opacity: 1,
    },
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  dialog: {
    width: '100%',
    height: 'auto',
  },

  modalImage: {
    // paddingBottom: '56.25%',
    height: 'auto',
    width: '100%',
  },
}))
