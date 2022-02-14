import React, { createContext, useReducer } from "react";

const initialState = {
  itemsInCart: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
  case "getItems":
    console.log(state);
    return {...state}
  case "setItems":
    sessionStorage.setItem('ItemsInCart', JSON.stringify(action.payload))
    return {...state, itemsInCart: action.payload}
  default:
    throw new Error();
  }
}

export const Context = createContext(initialState)

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return(
    <Context.Provider value={[state, dispatch]}>
      { children }
    </Context.Provider>
  )
}