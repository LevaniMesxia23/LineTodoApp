import { useTranslation } from "react-i18next";
function ColorMap() {
  const {t} = useTranslation()
  return (
    <div className="flex flex-col mb-8 gap-6 w-full">
      <div className="flex gap-4 items-center">
        <p className=" text-[1.5rem] font-semibold">{t("Complete")} </p>
        <div className="w-6 h-6 bg-green-400 rounded-full animated-infinity"></div>
      </div>
      <div className="flex gap-4 items-center">
        <p className=" text-[1.5rem] font-semibold">{t("Important")} </p>
        <div className="w-6 h-6 bg-orange-400 rounded-full animated-infinity"></div>
      </div>
      <div className="flex gap-4 items-center">
        <p className=" text-[1.5rem] font-semibold">{t("Complete & Important")} </p>
        <div className="w-6 h-6 bg-[#9966CC] rounded-full animated-infinity"></div>
      </div>
    </div>
  );
}

export default ColorMap;
