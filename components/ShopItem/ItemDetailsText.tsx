import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Product } from 'interfaces/shopItem.interface';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';
import ItemAddedAlert from '../Alerts/ItemAddedAlert';
import AddItemForm from '../Forms/AddItemForm/AddItemForm';

const useStyles = makeStyles(theme =>
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
      <ItemAddedAlert show={showAlert} />
    </Container>
  );
};

export default ItemDetailsText;
