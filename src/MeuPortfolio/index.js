import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/fernandakimiek">
        https://github.com/fernandakimiek
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const cards = [1, 2, 3]

const theme = createTheme()

export default function MeuPortfolio() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Portfólio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
              Fernanda Kishimoto
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Meu nome é Fernanda, tenho 32 anos e sou desenvolvedora de software. <br />
              Aqui irei colocar um pouco do meu currículo e experiências com front-end.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8, flexDirection: 'row' }} maxWidth="md"></Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  )
}
