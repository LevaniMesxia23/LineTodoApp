import { markImportant } from "../api/Todos";

export const UseToggleImportant = async (taskId, tasks, setTasks, user) => {
  const taskToUpdate = tasks?.find((task) => task.id === taskId);

  if (taskToUpdate) {
    const updatedTask = {
      ...taskToUpdate,
      isImportant: !taskToUpdate.isImportant,
    };

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
    );

    try {
      const data = await markImportant({
        userId: user.id,
        updatedTask,
        taskId,
      });

      console.log("Task updated:", data);

      console.log("Updated Task Important Value:", updatedTask.isImportant);
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  }
};
