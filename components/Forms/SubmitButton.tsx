import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme =>
  createStyles({
    SubmitButtonContainer: {
      // styles here
    },
    doneButton: {
      backgroundColor: theme.palette.success.main,
    },
  })
);

export type SubmitStatus = 'ready' | 'submitting' | 'done';

interface Props {
  status?: SubmitStatus;
}

export default function SubmitButton({ status = 'ready' }: Props) {
  const classes = useStyles();

  const props = (status: SubmitStatus): ButtonProps => {
    switch (status) {
      case 'ready':
        return {
          endIcon: <SendIcon />,
          disabled: false,
          children: 'Send',
        };
      case 'submitting':
        return {
          endIcon: <CircularProgress />,
          disabled: true,
          children: 'Sending...',
        };
      case 'done':
        return {
          endIcon: <DoneIcon />,
          disabled: false,
          children: 'Email Sent',
          className: classes.doneButton,
        };
    }
  };

  return (
    <Button variant='contained' {...props(status)}>
      Email Sent
    </Button>
  );
}
