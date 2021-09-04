import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export type FlexboxProps = {
  wrap?: boolean;
  dir?: 'row' | 'col' | 'column';
  justify?: 'start' | 'end' | 'center';
  align?: 'start' | 'end' | 'center';
  grow?: number | boolean;
} & BoxProps;

export function Flexbox(props: FlexboxProps) {
  const {
    wrap = false,
    dir = 'row',
    justify = 'start',
    align = 'start',
    grow = 0,
    children,
    sx,
    ...boxProps
  } = props;

  const flexDirection = dir === 'col' || dir === 'column' ? 'column' : dir;

  const justifyContent =
    justify === 'start'
      ? 'flex-start'
      : justify === 'end'
      ? 'flex-end'
      : justify;

  const alignItems =
    align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align;

  const flexGrow = grow === true ? 1 : grow === false ? 0 : grow;

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        flexDirection,
        flexGrow,
        alignItems,
        justifyContent,
        ...sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}

export type FlexRowProps = FlexboxProps;
export function FlexRow(props: FlexRowProps) {
  const { children, ...otherProps } = props;
  return (
    <Flexbox dir='row' {...otherProps}>
      {children}
    </Flexbox>
  );
}

export type FlexColProps = FlexboxProps;
export function FlexCol(props: FlexColProps) {
  const { children, ...otherProps } = props;
  return (
    <Flexbox dir='col' {...otherProps}>
      {children}
    </Flexbox>
  );
}
