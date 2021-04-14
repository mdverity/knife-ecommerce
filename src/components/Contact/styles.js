import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: '#e9e9e9',
    padding: theme.spacing(3),
    minHeight: '100vh',
  },

  root: {
    flexGrow: 1,
  },
}))
