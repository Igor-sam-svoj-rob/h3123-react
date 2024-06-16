import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: [
    { id: "1", ime: "Ivan", email: "ivan@example.com.hr" },
    { id: "2", ime: "Stjepan", email: "stjepan@example.com.hr" },
    { id: "3", ime: "Maja", email: "maja@example.com.hr" },
  ],

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, ime, email } = action.payload;
      const selectedUser = state.find((user) => user.id === id);
      if (selectedUser) {
        selectedUser.ime = ime;
        selectedUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const selectedUser = state.find((user) => user.id === id);
      if (selectedUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
