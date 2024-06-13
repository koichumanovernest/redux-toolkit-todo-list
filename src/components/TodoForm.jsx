import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodos } from "../store/slice/todoThunk";
import { Button, TextField } from "@mui/material";

const TodoForm = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [photo, setPhoto] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleTitle = (e) => {
		setTitle(e.target.value);
	};
	const handlePhoto = (e) => {
		setPhoto(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newData = {
			name: name,
			title: title,
			photo: photo,
		};
		dispatch(postTodos(newData));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextField type="text" value={name} onChange={handleName} label="name"/>
				<TextField type="text" value={title} onChange={handleTitle} label="title"/>
				<TextField type="url" value={photo} onChange={handlePhoto}  label="photo"/>
				<Button variant="contained" type="submit">Submit</Button>
			</form>
		</div>
	);
};

export default TodoForm;
