import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/Todos";
import { MyContext } from "../context/Context";
import { useContext } from "react";


function TodoBoxes() {
  const {user} = useContext(MyContext)
  const userId = user?.id

  const { data: todos, isLoading } = useQuery({
    queryFn: () => getTodos(userId),
    queryKey: ["todos", userId]
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
