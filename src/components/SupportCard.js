import { Card, CardContent, Typography } from '@mui/material';

export const SupportCard = () => {
  return (
    <Card style={{ backgroundColor: '#D3E1E1', borderRadius: '5px' }}>
      <CardContent style={{ paddingBottom: '0' }}>
        <Typography
          variant='h5'
          align='center'
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Comment Received
        </Typography>
        <p align='right' style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Username
        </p>
      </CardContent>
    </Card>
  );
};
