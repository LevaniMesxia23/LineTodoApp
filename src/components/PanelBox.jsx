import PropTypes from "prop-types";
import { UseToggleImportant } from "../hooks/useToggleImportant";
import { UseToggleComplate } from "../hooks/useToggleComplate";
import {
  ImportanceIcon,
  ImportantIconGreen,
  CompletedIconGreen,
  CompletedIcon,
} from "../icons/icons";
import { useTranslation } from "react-i18next";


// import LanguageChanger from "./LanguageChanger";

function PanelBox({ taskId, tasks, setTasks, user }) {
  const { t } = useTranslation();

  const handleToggleImportant = async () => {
    await UseToggleImportant(taskId, tasks, setTasks, user);
  };

  const handleToggleComplate = async () => {
    await UseToggleComplate(taskId, tasks, setTasks, user);
  };

  const taskFind = tasks?.find((task) => task.id === taskId);



  return (
    // clickDot === index && (
     
      <div
        data-aos="fade-right"
        className="bg-white absolute py-2 px-[0.88rem] rounded-lg mt-20 -ml-[148px] min-w-[11.75rem] z-10 right-4 "
      >
        {/* <LanguageChanger /> */}
        <ul className="flex flex-col gap-1">
          <div
            onClick={handleToggleImportant}
            className={`flex justify-start py-[0.62rem] hover:bg-gray-100 border-b-[1px] rounded-md ${
              taskFind?.important && "text-[#8ac926]"
            } gap-3 w-full pl-2 cursor-pointer`}
          >
            {taskFind?.important ? <ImportantIconGreen /> : <ImportanceIcon />}
            <li>{t("Important")}</li>
          </div>

          <div
            onClick={handleToggleComplate}
            className={`flex justify-start py-[0.62rem] gap-3 w-full hover:bg-gray-100 pl-2 rounded-md cursor-pointer border-b-[1px] ${
              taskFind?.complate ? "text-[#8ac926]" : ""
            }`}
          >
            {taskFind?.complate ? <CompletedIconGreen /> : <CompletedIcon />}
            <li className={taskFind?.complate ? "line-through" : ""}>
              {t("Completed")}
            </li>
          </div>
        </ul>
      </div>

    )
  // );
}

export default PanelBox;

PanelBox.propTypes = {
  userId: PropTypes.string.isRequired,
  taskId: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
