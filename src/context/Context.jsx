import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react";
import { useMediaQuery } from "@uidotdev/usehooks";

const defaultContextValue = {
  description: "",
  setDescription: () => {},
  burgerClicked: false,
  setBurgerClicked: () => {},
  user: null,
  tasks: [],
  setTasks: () => {},
  clickDot: false,
  setClickDot: () => {},
  searchTodo: () => {},
  setSearchTodo: () => {}
};

export const MyContext = createContext(defaultContextValue);

export const MyProvider = ({ children }) => {
  const [description, setDescription] = useState("");
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [clickDot, setClickDot] = useState(false);
  const { user } = useUser();
  const [searchTodo, setSearchTodo] = useState('')

  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");
  const isMobile = useMediaQuery("only screen and (max-width : 768px)")
  const isMedium = useMediaQuery("only screen and (min-width : 540px)")

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
        searchTodo,
        setSearchTodo,
        isMobile,
        isMedium
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
