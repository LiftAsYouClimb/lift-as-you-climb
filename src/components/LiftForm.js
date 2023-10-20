import React, { useState } from 'react'

import { Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'

import FormInput from '../components/FormInput'

const LiftPage = () => {
  const [supportText, setSupportText] = useState('')
  const theme = useTheme()

  const handleSubmit = () => {
    // Handle saving the text to the backend here
  }

  return (
    <Container style={{ marginTop: '24px' }}>
      <Grid container spacing={1}>
        <Box
          p={3}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            height: '100%',
            width: '100%'
          }}
        >
          <Typography
            variant='h2'
            gutterBottom
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Offer Your Support
          </Typography>
        </Box>
        <Grid
          xs={12}
          md={8}
          lg={8}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            height: '100%',
            width: '100%'
          }}
        >
          <Paper
            elevation={3}
            style={{
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '80%',
              backgroundColor: theme.palette.customColorLightCyan.main
            }}
          >
            <Box p={3}>
              <Typography
                gutterBottom
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                variant='h6'
              >
                {' '}
                Words of Wisdom:
              </Typography>
              <FormInput setText={setSupportText} text={supportText} />
            </Box>
            <IconButton
              color='primary'
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              onClick={handleSubmit}
            >
              SUBMIT
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
export default LiftPage
