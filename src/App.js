import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo//AddTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">Todo list</header>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
