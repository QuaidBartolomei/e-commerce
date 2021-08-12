import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  })
);

export default function UploadImageButton({
  onFileUpload,
}: {
  onFileUpload: (files: File[]) => void;
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        type='file'
        multiple
        onChange={async (e) => {
          let files = e.target.files;
          if (!files) return;
          let fileArray: File[] = [];
          for (let i = 0; i < files.length; i++) fileArray.push(files[i]);
          onFileUpload(fileArray);
        }}
      />
      <label htmlFor='contained-button-file'>
        <Button variant='contained' color='primary' component='span'>
          Upload
        </Button>
      </label>
    </div>
  );
}
