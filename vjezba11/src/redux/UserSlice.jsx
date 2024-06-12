import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: [
    { id: "1", ime: "Ivan", email: "ivan@example.com.hr" },
    { id: "2", ime: "Stjepan", email: "stjepan@example.com.hr" },
    { id: "3", ime: "Maja", email: "maja@example.com.hr" },
  ],

  reducers: {
    addUser: (state) => {},
    editUser: (state) => {},
    deleteUser: (state) => {},
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
