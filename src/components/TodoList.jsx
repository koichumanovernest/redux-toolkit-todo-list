import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../store/slice/todoThunk";

const TodoList = () => {
	const { todos } = useSelector((state) => state.todo);
   const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos());
	}, []);

	return (
		<div>
			{todos?.map((item) => (
				<Todo key={item.id} {...item} />
			))}
		</div>
	);
};

export default TodoList;
