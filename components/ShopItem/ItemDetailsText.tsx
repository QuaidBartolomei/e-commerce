import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { Product } from 'interfaces/shopItem.interface';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';
import AddItemForm from '../Forms/AddItemForm/AddItemForm';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
  })
);

const ItemDetailsText = ({ item }: { item: Product }) => {
  const classes = useStyles();

  const [showAlert, setShowAlert] = React.useState(false);

  const description = loremIpsum({
    count: 3,
    units: 'sentence',
  });

  return (
    <Container className={classes.container}>
      <Typography component='h1' variant='h3' style={{ margin: 0 }}>
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <AddItemForm item={item} onAddItem={() => setShowAlert(true)} />
      <Typography>{description}</Typography>
    </Container>
  );
};

export default ItemDetailsText;
