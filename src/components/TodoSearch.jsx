import { useContext } from "react";
import { MyContext } from "../context/Context";
import useAddTodo from "../hooks/useAddTodo";

function TodoSearch() {
  const { description, setDescription, user } = useContext(MyContext);
  const { mutateAsync: addTodoMutation } = useAddTodo();
  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && description.trim() !== "") {
      await addTodoMutation({ description, user_id: user.id });
      setDescription("");
    }
  };
  return (
    <div>
      <div className="flex justify-center mt-8 lg:ml-[25%]">
        <div className="flex items-center relative w-full max-w-lg mb-[2.5rem]">
          <svg
            className="absolute ml-7"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 6V18M18 12H6"
              stroke="#252931"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            name="task"
            className="pl-[2.88rem] pr-3 py-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 sm:text-sm lg:text-base mx-4"
            placeholder="Add a task"
            style={{ boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.25)" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoSearch;
