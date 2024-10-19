import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/Todos";

function TodoBoxes() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => getTodos(),
    queryKey: ["todos"],
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo.id} className=" overflow-hidden">
          <span className="whitespace-pre-wrap overflow-ellipsis">
            {todo.description}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TodoBoxes;
