import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const store = configureStore({
    reducer: reducers(),
    devTools: true,
    enhancers: [],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
