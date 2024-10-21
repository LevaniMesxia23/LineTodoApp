import { Twirl as Hamburger } from "hamburger-react";
import { MyContext } from "../context/Context";
import { UserButton } from "@clerk/clerk-react";
import { useContext } from "react";
import { CircleIcon, SearchIcon } from "../icons/icons";
import SideNav from "./SideNav";
export default function Header() {
  const { burgerClicked, setBurgerClicked, isDesktop } = useContext(MyContext);

  const handleBurger = () => {
    setBurgerClicked(!burgerClicked);
  };
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative z-20 " >
      {!isDesktop && (
        <div className=" flex gap-4 items-center">
          <Hamburger
            toggled={burgerClicked}
            toggle={handleBurger}
            size={24}
            color="black"
            style={{ width: "calc(100% + 31px)" }}
          />
        </div>
      )}
      <SideNav />
      <div className="w-12 h-12  rounded-full flex items-center justify-center mx-auto ">
        <CircleIcon className=""/>
      </div>

      <div className=" flex gap-4 items-center">
        <SearchIcon />
        <div className="h-[1rem] bg-[#82868F] w-[0.0625rem]"></div>
        <UserButton afterSignOutUrl="/signin" />
      </div>
    </header>
  );
}
