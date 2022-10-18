import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const DialogContext = createContext();

export const DialogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const dialogReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(dialogReducer, INITIAL_STATE);

  return (
    <DialogContext.Provider value={{ data: state, dispatch }}>
      {children}
    </DialogContext.Provider>
  );
};
