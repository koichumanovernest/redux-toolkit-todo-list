import { useDispatch } from "react-redux";
import { deleteTodos } from "../store/slice/todoThunk";
import { Button } from '@mui/material';

const Todo = ({ id, name, title, photo }) => {
   const dispatch = useDispatch()

   const deleteTodosId = () => {
      dispatch(deleteTodos({id}));
   };
	return (
		<div>
			<img src={photo} alt="todo" />
			<h1>{name}</h1>
			<h2>{title}</h2>
         <Button onClick={deleteTodosId}>delete</Button>
		</div>
	);
};

export default Todo;
