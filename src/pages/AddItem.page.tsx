import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SizeSelect from 'components/SizeSelect';
import UploadImageButton from 'components/UploadImageButton';
import {
  ClothingSize,
  ShopItemCategory,
  ShopItemData,
} from 'interfaces/ShopItemData.interface';
import React from 'react';
import { addShopItem } from 'utils/db.utils';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(3, 0),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddItem() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [price, setPrice] = React.useState(99);
  const [category, setCategory] = React.useState<ShopItemCategory>('Shirt');
  const [size, setSize] = React.useState<ClothingSize>('S');

  function onSubmit() {
    console.log('new item:', {
      name,
      price,
      category,
      size,
      imageUrl,
    });
  }

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Add New Item
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='fname'
                name='name'
                variant='outlined'
                required
                fullWidth
                id='name'
                label='Name'
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='price'
                name='price'
                label='Price'
                type='number'
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='category'
                label='Category'
                name='category'
                onChange={(e) =>
                  setCategory(e.target.value as ShopItemCategory)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <SizeSelect onChange={setSize} />
            </Grid>
            <Grid item xs={3}>
              <UploadImageButton onFileUpload={setImageUrl} />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={onSubmit}
          >
            Add Item
          </Button>
        </form>
      </div>
    </Container>
  );
}
