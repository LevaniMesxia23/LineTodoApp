import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react";
import { useMediaQuery } from "@uidotdev/usehooks";

const defaultContextValue = {
  description: "",
  setDescription: () => {},
  burgerClicked: false,
  setBurgerClicked: () => {},
  isDesktop: Boolean,
  user: null,
  tasks: [],
  setTasks: () => {},
  clickDot: false,
  setClickDot: () => {}
};

export const MyContext = createContext(defaultContextValue);

export const MyProvider = ({ children }) => {
  const [description, setDescription] = useState("");
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [clickDot, setClickDot] = useState(false);
  const { user } = useUser();

  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");
  const isMobile = useMediaQuery("only screen and (max-width : 768px)")

  return (
    <MyContext.Provider
      value={{
        description,
        setDescription,
        burgerClicked,
        setBurgerClicked,
        isDesktop,
        user,
        tasks,
        setTasks,
        clickDot, 
        setClickDot,
        isMobile
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
