import { deleteTodo } from "../api/Todos";
export const deleteTodoById = async (
  userId,
  taskId,
  tasks,
  setTasks,
  setClickDot
) => {
  if (!userId) {
    console.error("user_id or taskId is missing");
    return;
  }

  await deleteTodo(userId, taskId);
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(updatedTasks);
  setClickDot(false);
};
