import { useMediaQuery } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
function ColorMap() {
  const {t} = useTranslation()
  const isMobile = useMediaQuery("only screen and (max-width : 492px)")
  return (
    <div className="flex flex-col mb-8 gap-6 w-full lg:flex-row lg:justify-center">
      <div className="flex gap-4 items-center">
        <p className=" text-[1.5rem]  text-green-200 uppercase">{t("Complete")} </p>
        <div className="w-6 h-6 bg-green-400 rounded-full animated-infinity"></div>
      </div>
      <div className="flex gap-4 items-center">
        <p className=" text-[1.5rem] text-orange-200 uppercase">{t("Important")} </p>
        <div className="w-6 h-6 bg-orange-400 rounded-full animated-infinity"></div>
      </div>
      <div className="flex gap-4 items-center">
        {!isMobile ? <p className=" text-[1.5rem] uppercase text-purple-200">{t("Complete & Important")} </p> : <p className=" text-[1.5rem] uppercase text-purple-200 w-[220px]">{t("Complete & Important")} </p>}
        <div className="w-6 h-6 bg-[#9966CC] rounded-full animated-infinity"></div>
      </div>
    </div>
  );
}

export default ColorMap;
