import { useMutation } from "@tanstack/react-query";
import { addTodo } from "../api/Todos"; 
import {useQueryClient} from "@tanstack/react-query"

const useAddTodo  = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todo"]);
      console.log("Todo added successfully!");
    },
  });
};

export default useAddTodo;
