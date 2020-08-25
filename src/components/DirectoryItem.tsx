import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      border: 'black 2px solid',
      width: '96px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
  })
);

const DirectoryItem = (item: DirectoryItemProps) => {
  const [isHover, setIsHover] = useState(false);

  const classes = useStyles();

  return (
    <Link className={classes.container} to='/hats'>
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
          backgroundColor: `rgba(255,255,255,${isHover ? '0.8' : '0.5'})`,
        }}
      >
        {item.title}
      </div>
    </Link>
  );
};

export default DirectoryItem;
