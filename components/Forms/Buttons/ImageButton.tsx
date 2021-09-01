import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme =>
  createStyles({
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
  })
);

export type ImageButtonProps = {
  src: string;
} & ButtonBaseProps;

export default function ImageButton({ src, ...buttonProps }: ImageButtonProps) {
  const classes = useStyles();
  return (
    <ButtonBase {...buttonProps}>
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${src})`,
        }}
      />
    </ButtonBase>
  );
}
