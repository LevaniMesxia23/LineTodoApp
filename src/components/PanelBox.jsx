import PropTypes from "prop-types";
import { UseToggleImportant } from "../hooks/useToggleImportant";
import { UseToggleComplate } from "../hooks/useToggleComplate";


function PanelBox({ taskId, tasks, setTasks, user }) {
  const handleToggleImportant = () => {
    UseToggleImportant(taskId, tasks, setTasks, user);
    console.log(tasks);
  };

  const handleToggleComplate = () => {
    UseToggleComplate(taskId, tasks, setTasks, user)
    console.log(tasks);
    
  }

  return (
    <div>
      <div onClick={handleToggleImportant}>
        Click to Mark Important
      </div>
      <div onClick={handleToggleComplate}>
        Click to Mark Complate
      </div>
    </div>
  );
}

export default PanelBox;

PanelBox.propTypes = {
  userId: PropTypes.string.isRequired,
  taskId: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
