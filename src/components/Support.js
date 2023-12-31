import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import { Typography, Card, CardContent } from '@mui/material';
import { SupportCard } from './SupportCard';

export const Support = ({title}) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      padding={2}
      style={{
        borderRadius: '5px',
        backgroundColor: '#0f283c',
        height: '100%',
      }}
    >
      <Typography
        variant='h3'
        align='center'
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: 'white',
          fontSize: '2rem',
          marginTop: '10px',
          borderRadius: '5px'
        }}
      >
      {title}
      </Typography>
      <Grid
        container
        sm={12}
        medium={12}
        lg={12}
        spacing={2}
        style={{
          marginTop: '20px',
          marginBottom: '10px',
          paddingTop: '10px',
          backgroundColor: 'white',
          overflow: 'scroll',
          height: '100%',
          borderRadius: '5px'
        }}
      >
        <Grid
          item
          sm={11}
          md={11}
          lg={11}
          style={{ marginRight: 'auto', marginLeft: 'auto' }}
        >
          <SupportCard />
        </Grid>
      </Grid>
    </Box>
  );
};
