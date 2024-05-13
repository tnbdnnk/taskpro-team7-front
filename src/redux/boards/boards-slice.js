import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  addBoard,
  editBoard,
  fetchBoard,
  deleteBoard,
} from './boards-operations';

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
  selectBoard: null,
};

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// 
// const columnSlice = createSlice({
//   name: 'columns',
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBoard.pending, pending)
//       .addCase(fetchBoard.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.columns = payload.columns;
//       })
//       .addCase(fetchBoard.rejected, rejected);
//   },
// });
// 

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoards.pending, pending)
      .addCase(getAllBoards.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.boards = payload;
      })
      .addCase(getAllBoards.rejected, rejected)
      .addCase(addBoard.pending, pending)
      .addCase(addBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.boards.push(payload);
      })
      .addCase(addBoard.rejected, rejected)
      .addCase(editBoard.pending, pending)
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.boards = state.boards.map((board) =>
          board._id === payload._id ? (board = payload) : board
        );
      })
      .addCase(editBoard.rejected, rejected)
      .addCase(fetchBoard.pending, pending)
      .addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectBoard = payload;
        // 
        state.columns = payload.columns;
      })
      .addCase(fetchBoard.rejected, rejected)
      .addCase(deleteBoard.pending, pending)
      .addCase(deleteBoard.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.boards = state.boards.filter((board) => board._id !== payload);
      })
      .addCase(deleteBoard.rejected, rejected);
  },
});

const boardsReducer = boardsSlice.reducer;

export default boardsReducer;
