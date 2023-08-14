import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import { Dispatch } from "react";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContex from "./state-management/contexts/tasksContext";
import AuthContext from "./state-management/contexts/authContext";
import authReducer from "./state-management/reducers/authenticationReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContex.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContex.Provider>
    </AuthContext.Provider>
  );
}

export default App;
