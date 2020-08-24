import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface DirectoryItemProps {
  img: string;
  title: string;
  xs?: 3 | 6;
  posY?: 'top' | 'bottom';
  tall?: boolean;
  height?: '240px';
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    directoryItem: {
      backgroundSize: 'cover',
      backgroundPositionY: 'center',
      backgroundPositionX: 'center',
      width: '100%',
      border: 'black 2px solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    itemLabel: {
      border: 'black 2px solid',
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: '96px',
      height: '64px',
      textAlign: 'center',
      verticalAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const DirectoryItem = (item: DirectoryItemProps) => {
  const [isHover, setIsHover] = useState(false);

  const classes = useStyles();

  return (
    <div
      className={classes.directoryItem}
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundPositionY: item.posY || 'center',
      }}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={classes.itemLabel}
        style={{
          backgroundColor: `rgba(255,255,255,${isHover ? '0.8' : '0.5'})`,
        }}
      >
        {item.title}
      </div>
    </div>
  );
};

export default DirectoryItem;
