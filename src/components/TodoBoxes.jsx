import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/Todos";
import { MyContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { ClickDots } from "../icons/icons";
import PanelBox from "./PanelBox";

function TodoBoxes() {
  const { user, setTasks, tasks } = useContext(MyContext);
  const userId = user?.id;
  const [, setClickDot] = useState(false);

  const handleClickDots = (index) => {
    setClickDot((prevIndex) => (prevIndex === index ? null : index));
  };

  const { data: todos, isLoading } = useQuery({
    queryFn: () => getTodos(userId),
    queryKey: ["todos", userId],
  });

  useEffect(() => {
    if (todos) {
      setTasks(todos);
    }
  }, [todos]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {todos?.map((todo, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 overflow-hidden border border-gray-200 flex flex-col gap-[1.62rem]"
        >
          <span className="block text-gray-800 text-sm md:text-base lg:text-lg font-medium whitespace-pre-wrap overflow-ellipsis">
            {todo.description}
          </span>
          <div className="flex justify-end">
            <ClickDots onClick={() => handleClickDots(index)} />
          </div>
          <PanelBox
            userId={userId}
            taskId={todo.id}
            tasks={tasks}
            setTasks={setTasks}
            user={user}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoBoxes;
