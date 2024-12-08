import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/Todos";
import { MyContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { ClickDots } from "../icons/icons";
import PanelBox from "../components/PanelBox";
import AOS from "aos";
import "aos/dist/aos.css";
import DateInput from "../components/DateInput";
import TodoSearch from "../components/TodoSearch";
import PaginationTodo from "../components/PaginationTodo";

function TodoBoxes() {
  const { user, setTasks, tasks, clickDot, isMedium } = useContext(MyContext);
  const userId = user?.id;

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

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
    queryKey: ["todo", userId],
  });

  useEffect(() => {
    if (todos) {
      setTasks(todos);
    }
  }, [todos]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const taskComplete = tasks.filter((task) => task.isComplated);

  const totalPages = Math.ceil(taskComplete.length / todosPerPage);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = taskComplete.slice(indexOfFirstTodo, indexOfLastTodo);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <TodoSearch />
        <div className="flex justify-center items-center lg:ml-[25%] mb-10 gap-6">
          <h1 className=" uppercase  text-[gray]  font-bold text-[2rem]" >
            Complete tasks
          </h1>
          <div className="w-6 h-6 bg-green-400 rounded-full animated-infinity"></div>
        </div>
        <div
          className={`px-4 grid lg:grid lg:grid-cols-3 lg:gap-6 gap-y-6 ${
            isMedium && "grid-cols-2 gap-6"
          } lg:ml-[25%] md:grid md:grid-cols-2 md:gap-6`}
        >
          {currentTodos.map((todo, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-md p-4 border border-gray-200 flex flex-col bg-[#8ac926]"
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
      </div>
      <div className="mt-auto flex justify-center">
        <PaginationTodo
          count={totalPages}
          page={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default TodoBoxes;
