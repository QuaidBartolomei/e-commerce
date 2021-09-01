import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import Review from 'components/Checkout/Review';
import { CheckoutPageStateProvider } from 'components/CheckoutPageState';
import AddressForm from 'components/Forms/AddressForm';
import PaymentForm from 'components/Forms/PaymentForm';
import React from 'react';
import { theme } from '../utils/_theme';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  const Content = () => {
    switch (activeStep) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <CheckoutPageStateProvider>
      <Paper
        sx={{
          my: 3,
          mx: 2,
          p: 2,
          [theme.breakpoints.up(600 + Number(theme.spacing(3)) * 2)]: {
            my: 6,
            width: 600,
            mx: 'auto',
            p: 3,
          },
        }}
      >
        <Typography component='h1' variant='h4' align='center'>
          Checkout
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{
            padding: theme.spacing(3, 0, 5),
          }}
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant='h5' gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant='subtitle1'>
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Content />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    sx={{
                      mt: 3,
                      ml: 1,
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </CheckoutPageStateProvider>
  );
}
