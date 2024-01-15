import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "usersData/getUsers",
  async (action, options) => {
    const state = options.getState();
    const res = await axios(`http://localhost:8000/api/user`, {
      params: {
        page: state.users.pages.current,
        filterName: state.users.filterName,
        filterValue: state.users.filterValue,
      },
    });
    const data = await res.data;
    return data;
  }
);

export const addUsers = createAsyncThunk(
  "userData/Addusers",
  async (action) => {
    await axios.post("http://localhost:8000/api/users/add", action);
  }
);

const usersSlice = createSlice({
  name: "usersData",
  initialState: {
    users: [],
    filterName: 'name',
    filterValue: "",
    isLoading: false,
    error: null,
    loadingAdd: false,
    errorAdd: null,
    pages: {
      current: 0,
      count: 0,
      limit: 1,
    },
  },
  reducers: {
    setFilterName: (state, action) => {
      state.filterName = action.payload;
    },
    setPage: (state, action) => {
      state.pages.current = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload.users;
      state.pages.count = Number(action.payload.count);
      state.pages.limit = action.payload.limit;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.loadingAdd = true;
    });
    builder.addCase(addUsers.rejected, (state, action) => {
      state.loading = false;
      state.errorAdd = action.error.message;
    });
  },
});

export const userActions = usersSlice.actions;

export default usersSlice.reducer;
