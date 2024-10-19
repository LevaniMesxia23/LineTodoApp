import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react"
import { useMediaQuery } from "@uidotdev/usehooks";

const defaultContextValue = {
  description: "",
  setDescription: () => {},
  burgerClicked: false,
  setBurgerClicked: () => {},
  isDesktop: Boolean,
  user: null
};

export const MyContext = createContext(defaultContextValue);

export const MyProvider = ({ children }) => {
  const [description, setDescription] = useState("");
  const [burgerClicked, setBurgerClicked] = useState(false);
  const {user} = useUser()

  const isDesktop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );

  return (
    <MyContext.Provider
      value={{
        description,    
        setDescription, 
        burgerClicked,
        setBurgerClicked,
        isDesktop,
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
