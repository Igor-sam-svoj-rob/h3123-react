import UserList from "./components/UserList";
import UserAdd from "./components/UserAdd";
import UserEdit from "./components/UserEdit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<UserAdd />} />
        <Route path="/edit-user/:id" element={<UserEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
