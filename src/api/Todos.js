import { supabase } from '../config/supabaseClient';

export const getTodos = async () => {
  const { data, error } = await supabase
    .from('todos')
    .select('*');

  if (error) throw error;
  return data;
};

export const addTodo = async ({ description, user_id }) => {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ description, user_id, complate: false, important: false }]);

  if (error) throw error;
  return data;
};

export const markImportant = async (id) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ important: true })
    .eq('id', id);

  if (error) throw error;
  return data;
};

export const markcomplate = async (id) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ complate: true })
    .eq('id', id);

  if (error) throw error;
  return data;
};

export const updateTodo = async ({ id, updatedData }) => {
  const { data, error } = await supabase
    .from('todos')
    .update(updatedData)
    .eq('id', id);

  if (error) throw error;
  return data;
};

export const deleteTodo = async (id) => {
  const { data, error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return data;
};
