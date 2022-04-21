import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialServices = {
  services: [
    "New Construction",
    "Building Additions",
    "Renovations",
    "Restorations",
    "Electrical set up",
    "Plumbing",
    "Roofing",
    "Car fix",
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState: initialServices,
  reducers: {
    addService(state, action) {
      state.resources.push(action.payload);
    },
  },
});

const servicesStore = configureStore({
  reducer: {
    services: servicesSlice.reducer,
  },
});

export const servicesActions = servicesSlice.actions;

export default servicesStore;
