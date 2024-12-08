import { supabase } from "../config/supabaseClient";

export const getTodos = async (user_id) => {
  const { data, error } = await supabase
    .from("todo")
    .select("*")
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
};

export const addTodo = async ({ description, user_id }) => {
  const { data, error } = await supabase
    .from("todo")
    .insert([{ description, user_id, isComplated: false, isImportant: false }]);

  if (error) throw error;
  return data;
};

export const markImportant = async ({ userId, updatedTask, taskId }) => {
  const { data, error } = await supabase
    .from("todo")
    .update({ isImportant: updatedTask.isImportant })
    .eq("id", taskId)
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};

export const markcomplate = async ({ userId, updatedTask, taskId }) => {
  const { data, error } = await supabase
    .from("todo")
    .update({ isComplated: updatedTask.isComplated })
    .eq("id", taskId)
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};

export const editTodo = async ({ user_id, updatedData }) => {
  const { data, error } = await supabase
    .from("todo")
    .update({description: updatedData.description})
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
};

export const deleteTodo = async (userId, taskId) => {
  const { data, error } = await supabase
    .from("todo")
    .delete()
    .eq("id", taskId)
    .eq("user_id", userId);

  if (error) {
    console.error("Error deleting the task:", error.message || error);
    throw error;
  }

  return data;
};
