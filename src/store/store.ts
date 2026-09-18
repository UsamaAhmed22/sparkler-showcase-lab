import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  mobileMenuOpen: boolean;
  activeProject: number;
};

const initialState: UiState = { mobileMenuOpen: false, activeProject: 0 };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
    setActiveProject(state, action: PayloadAction<number>) {
      state.activeProject = action.payload;
    },
  },
});

export const { closeMobileMenu, setActiveProject, toggleMobileMenu } = uiSlice.actions;
export const store = configureStore({ reducer: { ui: uiSlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;