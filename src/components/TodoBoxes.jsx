import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/Todos";
import { MyContext } from "../context/Context";
import { useContext, useEffect } from "react";
import { ClickDots } from "../icons/icons";
import PanelBox from "./PanelBox";
import AOS from "aos";
import "aos/dist/aos.css";
import DateInput from "./DateInput";
import PropTypes from "prop-types"

function TodoBoxes({ page, todosPerPage }) {
  const { user, setTasks, tasks, clickDot, isMedium, searchTodo } = useContext(MyContext);
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

  const startIndex = (page - 1) * todosPerPage;
  const currentTodos = tasks?.slice(startIndex, startIndex + todosPerPage);

  return (
    <div
      className={`px-4 grid lg:grid lg:grid-cols-3 gap-6 lg:gap-6 mb-[5rem] ${
        isMedium && "grid-cols-2 gap-6 "
      } lg:ml-[25%] md:grid md:grid-cols-2 md:gap-6`}
    >
      {currentTodos?.filter(item => {
        return searchTodo.toLowerCase() === '' 
          ? true 
          : item.description.toLowerCase().includes(searchTodo.toLowerCase());
      }).map((todo, index) => (
        <div
          key={todo.id}
          className="relative bg-white rounded-lg shadow-md p-4 border border-gray-200 flex flex-col "
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

TodoBoxes.propTypes = {
  page: PropTypes.number.isRequired,        
  todosPerPage: PropTypes.number.isRequired, 
};

export default TodoBoxes;
