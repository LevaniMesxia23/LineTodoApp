import { useState, useContext } from "react";
import TodoSearch from "../components/TodoSearch";
import TodoBoxes from "../components/TodoBoxes";
import PaginationTodo from "../components/PaginationTodo";
import { MyContext } from "../context/Context";

function HomePage() {
  const [page, setPage] = useState(1);
  const todosPerPage = 6;
  const { tasks } = useContext(MyContext);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <TodoSearch />
        <TodoBoxes page={page} todosPerPage={todosPerPage} />
      </div>
      <div className="mt-auto flex justify-center">
        <PaginationTodo 
          count={Math.ceil(tasks.length / todosPerPage)} 
          page={page} 
          onPageChange={handlePageChange} 
        />
      </div>
    </div>
  );
}

export default HomePage;
