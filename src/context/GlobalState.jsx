import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = { transactions: [], transfers: [] };

// create context
export const GlobalContext = createContext(initialState);

// Provider component
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  // Add transfer
  function addTransfer(transfer) {
    dispatch({ type: "ADD_TRANSFER", payload: transfer });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        transfers: state.transfers,
        addTransaction,
        deleteTransaction,
        addTransfer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalProvider;
