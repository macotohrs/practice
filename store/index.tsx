import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// アクションの作成
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

// リデューサーの作成
const initialState = { count: 1 };
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count += 1;
    })
    .addCase(decrement, (state) => {
      state.count -= 1;
    });
});

// ストアの作成
const store = configureStore({
  reducer: reducer,
});

export default store;
