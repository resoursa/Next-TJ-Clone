import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px'
      },

      contained: {
        backgroundColor: '#fff',
        boxShadow: '0 1px 1px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.05), 0 -1px 0 rgba(0,0,0,0.05), -1px 0 0 rgba(0,0,0,0.1), 1px 0 0 rgba(0,0,0,0.1)',
        '&:hover': {
          backgroundColor: 'white',
          boxShadow: '0 1px 1px rgba(0,0,0,0.15), 0 4px 7px rgba(0,0,0,0.05), 0 -1px 0 rgba(0,0,0,0.05), -1px 0 0 rgba(0,0,0,0.05), 1px 0 0 rgba(0,0,0,0.05)'
        }
      }
    },

    MuiPaper: {
      root: {
        backgroundColor: "transparent"
      }
    }
  }
})