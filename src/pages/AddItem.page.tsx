import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ItemThumbnailGrid from 'components/ThumbnailGrid';
import SizeSelect from 'pages/ItemDetails/SizeSelect';
import UploadImageButton from 'components/UploadImageButton';
import { ShopItemCategory, ClothingSize, addImageToStorage, ItemData, addShopItem } from 'models/shop-item/shop-item.db';
import React from 'react';
import shortid from 'shortid';

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
  formControl: {
    width: 'fit-content',
    minWidth: 120,
    paddingLeft: theme.spacing(1),
  },
}));

type ImageFile = { file: File; url: string };

export default function AddItem() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState<ShopItemCategory>('Shirts');
  const [size, setSize] = React.useState<ClothingSize>('S');
  const [selectedImage, setSelectedImage] = React.useState('');
  const [imageFiles, setImageFiles] = React.useState<ImageFile[]>([]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    e.stopPropagation();
    let imageUrl = await addImageToStorage(imageFiles[0].file);
    let itemData: ItemData = {
      category,
      price: Number(price),
      name,
      sizes: [size],
      imageUrls: [imageUrl],
            id: shortid.generate(),
    };
    addShopItem(itemData);
  }

  function removeSelectedImage() {
    if (selectedImage === '') return;
    setImageFiles(imageFiles.filter((x) => x.url !== selectedImage));
    setSelectedImage('');
  }

  function onFilesSelected(files: File[]) {
    setImageFiles([
      ...imageFiles,
      ...files.map(file => ({
        file,
        url: URL.createObjectURL(file),
      })),
    ]);
  }

  const DeleteImageButton = () => (
    <Button
      color='secondary'
      variant='contained'
      onClick={removeSelectedImage}
      disabled={selectedImage === ''}
    >
      Delete Image
    </Button>
  );

  const SubmitButton = () => (
    <Button
      fullWidth
      variant='contained'
      color='primary'
      className={classes.submit}
      type='submit'
    >
      Add Item
    </Button>
  );

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Add New Item
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='name'
                variant='outlined'
                required
                fullWidth
                autoFocus
                id='name'
                label='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                autoFocus
                id='price'
                name='price'
                label='Price'
                type='number'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id='category_label'>Category</InputLabel>
                <Select
                  required
                  labelId='category_label'
                  id='category'
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value as ShopItemCategory);
                  }}
                >
                  <MenuItem value={'Hat'}>Hat</MenuItem>
                  <MenuItem value={'Shirt'}>Shirt</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <SizeSelect onChange={setSize} />
            </Grid>
            <Grid item xs={3}>
              <UploadImageButton onFileUpload={onFilesSelected} />
            </Grid>
            <Grid item xs={6}>
              <DeleteImageButton />
            </Grid>
            <Grid item xs={12}>
              <ItemThumbnailGrid
                imageUrls={imageFiles.map((file) => file.url)}
                onSelectImage={setSelectedImage}
              />
            </Grid>
          </Grid>
          <SubmitButton />
        </form>
      </div>
    </Container>
  );
}
