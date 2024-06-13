import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const getTodos = createAsyncThunk(
	"todos/getTodos",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(url);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const postTodos = createAsyncThunk(
	"tosos/postTodos",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			await axios.post(url, data);
			dispatch(getTodos());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteTodos = createAsyncThunk(
	"todos/deleteTodos",
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(`${url}/${id}`);
			dispatch(getTodos());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
