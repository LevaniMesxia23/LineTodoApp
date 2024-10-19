import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/Todos";
import { MyContext } from "../context/Context";
import { useContext, useEffect } from "react";
import { ClickDots } from "../icons/icons";
import { useState } from "react";



function TodoBoxes() {
  const { user } = useContext(MyContext);
  const userId = user?.id;
  const [clickDot, setClickDot] = useState(false);
  
  const handleClickDots = (index) => {
    setClickDot((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    console.log(clickDot);
  }, [clickDot]);

  const { data: todos, isLoading } = useQuery({
    queryFn: () => getTodos(userId),
    queryKey: ["todos", userId],
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {todos?.map((todo,index) => (
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
        </div>
      ))}
    </div>
  );
}

export default TodoBoxes;
