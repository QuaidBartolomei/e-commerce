import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ThumbnailGrid from './components/ThumbnailGrid';
import React, { createContext, useContext, useReducer } from 'react';
import FullsizeImage from './components/FullsizeImage';
import SelectedImage from './components/SelectedImage';

const useStyles = makeStyles((theme) =>
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

type State = {
  imageUrls: string[];
  selectedImage: string;
  showFullSizeImage: boolean;
};
type Action =
  | { type: 'set_selected_image'; payload: string }
  | { type: 'toggle_show_fullsize_image' };
type Dispatch = (action: Action) => void;

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const itemDetailsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set_selected_image': {
      return { ...state, selectedImage: action.payload };
    }
    case 'toggle_show_fullsize_image': {
      return { ...state, showFullSizeImage: !state.showFullSizeImage };
    }
  }
};

interface Props {
  imageUrls: string[];
}
export default function ImageGallery(props: Props) {
  const classes = useStyles();
  const imageUrls = props.imageUrls.filter((v, i, a) => a.indexOf(v) === i);
  const [state, dispatch] = useReducer(itemDetailsReducer, {
    imageUrls,
    selectedImage: imageUrls[0],
    showFullSizeImage: false,
  });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <FullsizeImage />
        <Container className={classes.container}>
          <SelectedImage />
          <Divider />
          <ThumbnailGrid />
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export function useImageGalleryState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

export function useImageGalleryDispatch() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a CountProvider');
  }
  return context;
}
