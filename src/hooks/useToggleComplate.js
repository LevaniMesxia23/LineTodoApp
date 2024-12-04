import { markcomplate } from "../api/Todos";

export const UseToggleComplate = async (taskId, tasks, setTasks, user) => {
  const taskToUpdate = tasks?.find((task) => task.id === taskId);

  if (taskToUpdate) {
    const updatedTask = {
      ...taskToUpdate,
      isComplated: !taskToUpdate.isComplated,
    };

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
    );

    try {
      const data = await markcomplate({
        userId: user.id,
        updatedTask,
        taskId,
      });

      console.log("Task updated:", data);
      console.log("Updated Task Important Value:", updatedTask.isImportant);
      console.log("Updated Task Complate Value:", updatedTask.isComplated);

      return updatedTask; 
    } catch (error) {
      console.error("Error updating task:", error.message);
      return null;
    }
  }
};
