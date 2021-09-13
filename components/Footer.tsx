import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { theme } from 'utils/_theme';

export type FooterProps = {
  copyright?: string;
} & BoxProps

export function Footer(props: FooterProps) {
  const { copyright, className = '', children, ...boxProps } = props;
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <Box
      component='footer'
      sx={{
        height: 100,
        width: '100%',
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        mt:4
      }}
      {...boxProps}
    >
      {children}
      {copyright && (
        <Typography>
          &copy; Copyright {currentYear}, {copyright}
        </Typography>
      )}
    </Box>
  );
}
