import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';

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
    container: {
      height: '100%',
      width: '100%',
      border: 'black 2px solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    },
    directoryItem: {
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPositionX: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    itemLabel: {
      position: 'absolute',
      pointerEvents: 'none',

      height: '80%',
      width: '90%',
      maxWidth: '140px',
      maxHeight: '64px',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'black 2px solid',
      fontSize:'min(3vw, 1.5rem)'
    },
  })
);

const DirectoryItem = (item: DirectoryItemProps) => {
  const [isHover, setIsHover] = useState(false);

  const classes = useStyles();

  return (
    <Link className={classes.container} to={Routes.Shop}>
      <motion.div
        className={classes.directoryItem}
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundPositionY: item.posY || 'center',
        }}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 6,
            ease: [0.25, 0.45, 0.45, 0.95],
          },
        }}
      />
      <div
        className={classes.itemLabel}
        style={{
          backgroundColor: `rgba(255,255,255,${isHover ? '0.9' : '0.7'})`,
        }}
      >
        {item.title}
      </div>
    </Link>
  );
};

export default DirectoryItem;
