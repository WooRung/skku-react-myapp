import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sidebarShow: true,
  },
  reducers: {
    toggleSidebar: (state, ...rest) => {
      return { ...state, sidebarShow: !state.sidebarShow };
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
