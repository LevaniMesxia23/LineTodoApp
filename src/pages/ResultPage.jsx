import PieChart from "../components/PieChart";
import ResultBoxes from "../components/ResultBoxes";
import { useTranslation } from "react-i18next";
export default function ResultsPage() {
  const {t} = useTranslation()
  return (
    <div>
      <ResultBoxes />
      <div className=" mt-8 flex justify-center gap-4 px-4 flex-wrap mb-10 lg:ml-[25%]">
        <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md w-full">
          <div className="flex justify-start w-full py-3">
            <h2 className="text-[#252931] text-[1rem] font-medium">
              {t("All Tasks")}
            </h2>
          </div>
          <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
          <PieChart></PieChart>
        </div>
        <div className="w-full flex justify-center"></div>
      </div>
    </div>
  );
}
