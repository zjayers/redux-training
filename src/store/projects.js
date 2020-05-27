import { createSlice } from '@reduxjs/toolkit';
let lastId = 0;
const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    projectRemoved: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      delete projects[index];
    },
    projectResolved: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects[index].resolved = true;
    },
  },
});

export const { projectAdded, projectRemoved, projectResolved } = slice.actions;
export default slice.reducer;
