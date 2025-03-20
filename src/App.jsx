import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const handleAddTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo])
      setTodo('')
    }
  }

  const handleRemoveTodo = (tod) => {
    setTodos([...todos.filter((todo) => todo !== tod)])
  }

  return (
    <div className='w-full h-[100vh] flex justify-center text-white'>
      <div className='w-6/12 bg-cyan-900 flex flex-col text-center pt-5 gap-5'>
        <h1 className='text-4xl'>To-Do List</h1>
        <Input todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
      </div>
    </div>
  )
}

export default App

