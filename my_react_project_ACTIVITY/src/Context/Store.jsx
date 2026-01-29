import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: [],
  user: null,
  theme: "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find(p => p.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map(p =>
            p.id === action.payload.id
              ? { ...p, qty: p.qty + 1 }
              : p
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_ONE":
      return {
        ...state,
        cart: state.cart
          .map(p =>
            p.id === action.payload
              ? { ...p, qty: p.qty - 1 }
              : p
          )
          .filter(p => p.qty > 0),
      };

    case "CLEAR_ITEM":
      return {
        ...state,
        cart: state.cart.filter(p => p.id !== action.payload),
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  );
}
