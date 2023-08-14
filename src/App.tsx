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
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
