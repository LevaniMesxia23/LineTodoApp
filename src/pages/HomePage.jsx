import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/Todos";
import TodoSearch from "../components/TodoSearch";

function HomePage() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => getTodos(),
    queryKey: ["todos"],
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <TodoSearch />
      {todos?.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.description}</h1>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
