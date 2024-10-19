import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react"


const defaultContextValue = {
  description: "",
  setDescription: () => {},
  user: null
};

export const MyContext = createContext(defaultContextValue);

export const MyProvider = ({ children }) => {
  const [description, setDescription] = useState("");
  const {user} = useUser()

  return (
    <MyContext.Provider
      value={{
        description,    
        setDescription, 
        user
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
