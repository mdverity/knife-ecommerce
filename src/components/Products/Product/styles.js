import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1),
  },

  root: {
    maxWidth: '100%',
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    transition: '.5s ease-out transform',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.1)',
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
  },

  modalImage: {
    // paddingBottom: '56.25%',
    height: 'auto',
    width: '100%',
  },
}))
