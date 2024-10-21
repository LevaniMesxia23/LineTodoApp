import { Twirl as Hamburger } from "hamburger-react";
import { MyContext } from "../context/Context";
import { UserButton } from "@clerk/clerk-react";
import { useContext } from "react";
import { SearchIcon } from "../icons/icons";
import SideNav from "./SideNav";
export default function Header() {
  const { burgerClicked, setBurgerClicked, isDesktop } = useContext(MyContext);

  const handleBurger = () => {
    setBurgerClicked(!burgerClicked);
  };
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative z-20">
      {!isDesktop && (
        <div className=" flex gap-4 items-center">
          <Hamburger
            toggled={burgerClicked}
            toggle={handleBurger}
            size={24}
            color="black"
          />
        </div>
      )}
      <SideNav />
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
        </svg>
      </div>

      <div className=" flex gap-4 items-center">
        <SearchIcon />
        <div className="h-[1rem] bg-[#82868F] w-[0.0625rem]"></div>
        <UserButton afterSignOutUrl="/signin" />
      </div>
    </header>
  );
}
