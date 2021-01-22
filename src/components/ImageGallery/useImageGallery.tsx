import React, { createContext, useContext, useReducer } from 'react';

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

export const ImageGalleryProvider: React.FC<Props> = (props) => {
  const { imageUrls } = props;
  const [state, dispatch] = useReducer(itemDetailsReducer, {
    imageUrls,
    selectedImage: imageUrls[0],
    showFullSizeImage: false,
  });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
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
