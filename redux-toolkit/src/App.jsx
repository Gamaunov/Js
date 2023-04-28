import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NewTodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { addTodo } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };
  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;
