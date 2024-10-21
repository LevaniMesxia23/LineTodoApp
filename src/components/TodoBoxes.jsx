import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/Todos";
import { MyContext } from "../context/Context";
import { useContext, useEffect } from "react";
import { ClickDots } from "../icons/icons";
import PanelBox from "./PanelBox";
import AOS from "aos";
import "aos/dist/aos.css";
import DateInput from "./DateInput";

function TodoBoxes() {
  const { user, setTasks, tasks, clickDot } = useContext(MyContext);
  const userId = user?.id;

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const useTaskContext = () => {
    const { setClickDot } = useContext(MyContext);

    const handleClickDots = (index) => {
      setClickDot((prevIndex) => (prevIndex === index ? null : index));
    };

    return { handleClickDots };
  };

  const { handleClickDots } = useTaskContext();

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
      {tasks?.map((todo, index) => (
        <div
        key={index}
        className="bg-white rounded-lg shadow-md p-4 overflow-hidden border border-gray-200 flex flex-col "
        >
        <DateInput />
          <span className="block px-[10px] text-gray-800 text-sm md:text-base lg:text-lg font-medium whitespace-pre-wrap overflow-ellipsis">
            {todo.description}
          </span>
          <div className="flex justify-end mt-[1.62rem]">
            <ClickDots onClick={() => handleClickDots(index)} />
          </div>
          {clickDot === index && (
            <PanelBox
              userId={userId}
              taskId={todo.id}
              tasks={tasks}
              setTasks={setTasks}
              user={user}
              index={index}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoBoxes;
