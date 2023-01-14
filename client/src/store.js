import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
