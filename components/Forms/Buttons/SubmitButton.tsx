import Button, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneIcon from '@material-ui/icons/Done';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';


export type SubmitStatus = 'ready' | 'submitting' | 'done';

type StateOptions = {
  text: string;
  icon: JSX.Element;
};

interface SubmitButtonOptions {
  ready: StateOptions;
  submitting: StateOptions;
  done: StateOptions;
}

const defaultOptions: SubmitButtonOptions = {
  ready: {
    text: 'Submit',
    icon: <SendIcon />,
  },
  submitting: {
    text: 'Submitting...',
    icon: <CircularProgress />,
  },
  done: {
    text: 'Done',
    icon: <DoneIcon />,
  },
};

export type SubmitButtonProps = ButtonProps & {
  status?: SubmitStatus;
  options?: Partial<SubmitButtonOptions>;
};

export default function SubmitButton({
  status = 'ready',
  options,
  ...buttonProps
}: SubmitButtonProps) {
  const newOptions = { ...defaultOptions, ...options };

  const states = {
    ready: {
      endIcon: newOptions.ready.icon,
      children: newOptions.ready.text,
      disabled: false,
    },
    submitting: {
      endIcon: newOptions.submitting.icon,
      children: newOptions.submitting.text,
      disabled: true,
    },
    done: {
      endIcon: newOptions.done.icon,
      children: newOptions.done.text,
      disabled: false,
      sx: {
        backgroundColor: 'success.main',
      },
    },
  };
  const { children, ...props } = states[status];

  return (
    <Button
      variant='contained'
      color='primary'
      type='submit'
      {...buttonProps}
      {...props}
    >
      {children}
    </Button>
  );
}
