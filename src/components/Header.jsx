import { Twirl as Hamburger } from "hamburger-react";
import { MyContext } from "../context/Context";
import { UserButton } from "@clerk/clerk-react";
import { useContext, useState } from "react";
import { CircleIcon, SearchIcon } from "../icons/icons";
import SideNav from "./SideNav";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { burgerClicked, setBurgerClicked, isDesktop, setSearchTodo,isMobile } =
    useContext(MyContext);
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [hideCircle, setHideCircle] = useState(false)

  const { t } = useTranslation();

  const handleBurger = () => {
    setBurgerClicked(!burgerClicked);
  };

  const handleSearchInput = () => {
    setOpenSearchInput(!openSearchInput);
    setHideCircle(!hideCircle)
  };
  console.log(openSearchInput);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative z-20 lg:ml-[25%]">
      {!isDesktop && (
        <div className="flex gap-4 items-center">
          <Hamburger
            toggled={burgerClicked}
            toggle={handleBurger}
            size={24}
            color="black"
          />
          <LanguageChanger />
        </div>
      )}
      {isDesktop && (
        <div className="relative pr-8">
          <svg
            className="absolute left-[3rem] top-[10px]"
            onClick={handleSearchInput}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M8.03228 0.934937C12.1881 0.934937 15.561 4.13657 15.561 8.08145C15.561 12.0263 12.1881 15.228 8.03228 15.228C3.87645 15.228 0.503601 12.0263 0.503601 8.08145C0.503601 4.13657 3.87645 0.934937 8.03228 0.934937ZM8.03228 13.6398C11.2675 13.6398 13.8879 11.1525 13.8879 8.08145C13.8879 5.01043 11.2675 2.52305 8.03228 2.52305C4.79704 2.52305 2.17664 5.01043 2.17664 8.08145C2.17664 11.1525 4.79704 13.6398 8.03228 13.6398ZM15.1304 13.6963L17.4964 15.9422L16.3134 17.0652L13.9474 14.8193L15.1304 13.6963Z"
              fill="#252931"
            />
          </svg>

          <input
            className="bg-[#E7E8EA] pl-[48px] text-[1.4rem] font-[400] ml-8 rounded-[0.8rem] h-[40px] w-full sm:w-[250px] md:w-[300px] lg:w-[460px]"
            type="text"
            name="search"
            placeholder="Search"
            onChange={(e) => setSearchTodo(e.target.value)}
          />
        </div>
      )}
      <SideNav />
      {!isDesktop && (
        (!hideCircle && <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto ">
          <CircleIcon />
        </div>)
      )}

      <div className={`flex gap-4 items-center justify-end ${openSearchInput && "w-[85%]" } `}>
        {isDesktop ? (
          <LanguageChanger />
        ) : !openSearchInput ? (
          <SearchIcon onClick={handleSearchInput} />
        ) : (
          <input
            className={`bg-[#E7E8EA]  ${isMobile ? "pl-[20px]" : "pl-[48px]"} text-[1.4rem] font-[400] ml-8 rounded-[0.8rem] h-[40px] w-[50%]  `}
            type="text"
            name="search"
            placeholder={t("Search")}
            onChange={(e) => setSearchTodo(e.target.value)}
          />
        )}
        <div className="h-[1rem] bg-[#82868F] w-[0.0625rem]"></div>
        <UserButton afterSignOutUrl="/signin" />
      </div>
    </header>
  );
}
