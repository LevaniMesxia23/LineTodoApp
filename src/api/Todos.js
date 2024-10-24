import { supabase } from "../config/supabaseClient";

export const getTodos = async (user_id) => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
};

export const addTodo = async ({ description, user_id }) => {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ description, user_id, complate: false, important: false }]);

  if (error) throw error;
  return data;
};

export const markImportant = async ({ userId, updatedTask, taskId }) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ important: updatedTask.important })
    .eq("id", taskId)
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};

export const markcomplate = async ({ userId, updatedTask, taskId }) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ complate: updatedTask.complate })
    .eq("id", taskId)
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};

export const editTodo = async ({ user_id, updatedData }) => {
  const { data, error } = await supabase
    .from("todos")
    .update({description: updatedData.description})
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
};

export const deleteTodo = async (userId, taskId) => {
  const { data, error } = await supabase
    .from("todos")
    .delete()
    .eq("id", taskId)
    .eq("user_id", userId);

  if (error) {
    console.error("Error deleting the task:", error.message || error);
    throw error;
  }

  return data;
};
