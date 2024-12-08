import { MyContext } from "../context/Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Result from "../../public/evaluation.png"
import { ImportantIcon, MyDayIcon } from "../icons/icons";
import CompletedSvg from "../../public/complete.png"

function SideNav() {
  const { burgerClicked, setBurgerClicked, isMobile } = useContext(MyContext);
  const {t} = useTranslation()

  const handleLinkClick = () => {
    if (burgerClicked) {
      setBurgerClicked(false);
    }
  };
  return (
    <div>
      {burgerClicked && (
        <div
          className={`fixed right-0 top-[80px] h-full w-1/3 z-40 transition-transform duration-300 ${
            burgerClicked ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={handleLinkClick}
        ></div>
      )}

      <nav 
        className={`fixed left-0 top-0 bottom-0 pt-[80px] ${
          isMobile ? "w-1/2" : "w-1/3"
        } bg-white shadow-lg transform transition-transform duration-300 z-10 lg:left-1/4 lg:w-1/4 lg:top-0 lg:pt-[5.1rem] lg:overflow-y-auto ${
          burgerClicked ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full flex items-center p-2 rounded-md transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-[#C7CAD0] scale-105"
                  : "bg-transparent hover:bg-[#D0D4D4]"
              }`
            }
            onClick={handleLinkClick}
          >
            <li className="flex gap-3  py-[0.625rem] pl-4 w-full rounded">
              <MyDayIcon />

              <span className="z-50">{t("My Day")}</span>
            </li>
          </NavLink>

          <NavLink
            to="/important"
            className={({ isActive }) =>
              `w-full flex items-center p-2 rounded-md transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-[#C7CAD0] scale-105"
                  : "bg-transparent hover:bg-[#D0D4D4]"
              }`
            }
            onClick={handleLinkClick}
          >
            <li className=" flex gap-3 ] py-[0.625rem] pl-4 w-full rounded ">
              <ImportantIcon />
              <span className="z-50">{t("Important")}</span>
            </li>
          </NavLink>

          <NavLink
            to="/complete"
            className={({ isActive }) =>
              `w-full flex items-center p-2 rounded-md transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-[#C7CAD0] scale-105"
                  : "bg-transparent hover:bg-[#D0D4D4]"
              }`
            }
            onClick={handleLinkClick}
          >
            <li className=" flex gap-3 ] py-[0.625rem] pl-4 w-full rounded ">
              <img src={CompletedSvg} alt="" className="w-[22px] h-[22px]"/>
              <span className="z-50">{t("Complete")}</span>
            </li>
          </NavLink>

          <NavLink
            to="/resultspage"
            className={({ isActive }) =>
              `w-full flex items-center p-2 rounded-md transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-[#C7CAD0] scale-105"
                  : "bg-transparent hover:bg-[#D0D4D4]"
              }`
            }
            onClick={handleLinkClick}
          >
           <li className="flex gap-3 py-[0.625rem] pl-4 w-full rounded">
              <img className="w-[22px] h-[22px]" src={Result} alt="" />

              <span className="z-50">{t("Results")}</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
