import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import downArrow from "../../public/down-arrow.png";
import { MyContext } from "../context/Context";
import { useContext } from "react";

function LanguageChanger() {
  const {burgerClicked} = useContext(MyContext)
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setIsRotated(!isRotated)
    if (burgerClicked) {
      setDropdownOpen((prev) => !prev);
      setIsRotated(prev => !prev)
    }
    
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if(burgerClicked === true){
      setDropdownOpen(false)
    }
  }, [burgerClicked])

  return (
    <div>
      <div className="relative " onClick={toggleDropdown}>
        <span className="text-black cursor-pointer hidden-on-small">
          {i18n.language === "en" ? "EN" : "KA"}
        </span>
        <img
          src={downArrow}
          alt="down arrow"
          className="w-4 h-4 cursor-pointer ml-2 inline-block"
          style={{
            transition: 'transform 0.3s ease',
            transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
        <div
          className={`z-20 absolute top-full mt-4 bg-white border -ml-4 shadow-lg rounded-lg p-2 transition-all duration-300 ease-in-out overflow-hidden ${
            isDropdownOpen
              ? "max-h-40 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
            onClick={() => changeLanguage("en")}
          >
            {t("english")}
          </div>
          <div
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
            onClick={() => changeLanguage("ka")}
          >
            {t("georgian")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageChanger;
