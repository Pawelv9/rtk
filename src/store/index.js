import {configureStore, createSlice} from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  }
})

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  }
});

// const startingStore = store.getState();
// console.log(JSON.stringify(startingStore));
//
// store.dispatch(
//   songSlice.actions.addSong("New Song")
// );

// const finalState = store.getState();

export { store };
export const {addSong, removeSong} = songSlice.actions;
