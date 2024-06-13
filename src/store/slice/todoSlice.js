import { createSlice } from "@reduxjs/toolkit";
import { deleteTodos, getTodos, postTodos } from "./todoThunk";

const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTodos.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getTodos.fulfilled, (state, action) => {
				state.loading = false;
				state.todos = action.payload;
			})
			.addCase(getTodos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(postTodos.fulfilled, (state, action) => {
				state.items.push(action.payload);
			})
			.addCase(deleteTodos.fulfilled, (state, action) => {
				state.items = state.items.filter((todo) => todo.id !== action.payload);
			});
	},
});
