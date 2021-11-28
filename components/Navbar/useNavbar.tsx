import React, { createContext, FC, useContext, useReducer } from 'react'

type State = {
  menuId: string
  mobileMenuId: string
  logoImage: string
  title: string
  anchorElement?: AnchorElement
  mobileMoreAnchorElement?: AnchorElement
  showNavDrawer?: boolean
}

type Action =
  | { type: 'close_menus' }
  | { type: 'set_anchorElement'; payload: AnchorElement }
  | { type: 'set_showNavDrawer'; payload: boolean }
  | { type: 'set_mobileMoreAnchorElement'; payload: AnchorElement }

const itemDetailsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'close_menus': {
      return { ...state, anchorElement: null, mobileMoreAnchorElement: null }
    }
    case 'set_anchorElement': {
      return { ...state, anchorElement: action.payload }
    }
    case 'set_showNavDrawer': {
      return { ...state, showNavDrawer: action.payload }
    }
    case 'set_mobileMoreAnchorElement': {
      return { ...state, mobileMoreAnchorElement: action.payload }
    }
  }
}

export const NavbarProvider: FC<useNavbarProps> = (props) => {
  const { children, initialState: receivedState } = props
  const initialState = {
    ...receivedState,
  }

  const [state, dispatch] = useReducer(itemDetailsReducer, initialState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export function useNavbarState() {
  const context = useContext(StateContext)
  if (context === undefined) {
    throw new Error('useuseNavbarState must be used within a UserProvider')
  }
  return context
}

export function useNavbarDispatch() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useuseNavbarDispatch must be used within a CountProvider')
  }
  return context
}

export type useNavbarProps = {
  initialState: State
}

type Dispatch = (action: Action) => void
const StateContext = createContext<State | undefined>(undefined)
const DispatchContext = createContext<Dispatch | undefined>(undefined)
type AnchorElement = HTMLElement | null
