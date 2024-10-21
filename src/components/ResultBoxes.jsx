import { MyContext } from "../context/Context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function ResultBoxes() {
  const { t } = useTranslation();
  const { tasks } = useContext(MyContext);
  
  const taskStats = [
    { label: t("All Tasks"), count: tasks.length },
    { label: t("Important"), count: tasks.filter(task => task.important).length },
    { label: t("In Progress"), count: tasks.filter(task => !task.complate).length },
    { label: t("Done"), count: tasks.filter(task => task.complate).length },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:ml-[25%]">
      {taskStats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
          <div className="flex justify-start w-full py-3">
            <h2 className="text-[#252931] text-[1rem] font-medium">{stat.label}</h2>
          </div>
          <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
          <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">{stat.count}</p>
        </div>
      ))}
    </div>
  );
}

export default ResultBoxes;
