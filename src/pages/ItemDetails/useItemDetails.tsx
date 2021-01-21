import { Product } from 'interfaces/shopItem.interface';
import React, { createContext, useContext, useReducer } from 'react';

type State = {
  item: Product;
  selectedImage: string;
  showFullSizeImage: boolean;
  selectedSize: string;
  selectedColor: string;
};
type Action =
  | { type: 'set_selected_image'; payload: string }
  | { type: 'set_selected_size'; payload: string }
  | { type: 'set_selected_color'; payload: string }
  | { type: 'toggle_show_fullsize_image' };
type Dispatch = (action: Action) => void;

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const itemDetailsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set_selected_image': {
      return { ...state, selectedImage: action.payload };
    }
    case 'set_selected_color': {
      const newColor = action.payload;
      const colorSelectionIsValid = state.item.inventory
        .map((i) => i.color)
        .includes(newColor);
      return {
        ...state,
        selectedColor: colorSelectionIsValid ? newColor : state.selectedColor,
      };
    }
    case 'set_selected_size': {
      const newSize = action.payload;
      const sizeSelectionIsValid = state.item.inventory
        .map((i) => i.size)
        .includes(newSize);
      return {
        ...state,
        selectedSize: sizeSelectionIsValid ? newSize : state.selectedSize,
      };
    }
    case 'toggle_show_fullsize_image': {
      return { ...state, showFullSizeImage: !state.showFullSizeImage };
    }
  }
};

export const ItemDetailsProvider: React.FC<{ item: Product }> = (props) => {
  const [state, dispatch] = useReducer(itemDetailsReducer, {
    item: props.item,
    selectedImage: props.item.imageUrls[0],
    showFullSizeImage: false,
    selectedSize: '',
    selectedColor: '',
  });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export function useItemDetailsState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

export function useItemDetailsDispatch() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a CountProvider');
  }
  return context;
}
