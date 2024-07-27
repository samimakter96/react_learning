import { useEffect, useState } from 'react';
import { TodoProvider } from './contexts';
import './App.css';
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((oldTodo) => [...oldTodo, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((oldTodo) =>
      oldTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((oldTodo) => oldTodo.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((oldTodo) =>
      oldTodo.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };


  // Load todos from local storage when component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    // if storedTodos is not empty that means some todos was there already
    if (storedTodos && storedTodos.length > 0) {
      // Parse the stored string back to an array and update state
      setTodos(JSON.parse(storedTodos));
    }
  }, []); // Empty dependency array ensures this effect runs only once when component mounts


  // Save todos to local storage when component unmounts
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Runs whenever todos state changes


  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
