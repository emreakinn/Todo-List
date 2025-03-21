import { use, useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [editTodoIndex, setEditTodoIndex] = useState(null)
  const [editTodoValue, setEditTodoValue] = useState('')
  const [error, setError] = useState('')

  const handleAddTodo = () => {
    if (todo !== '') {
      setTodos([...todos, {
        id: todos.length + 1,
        text: todo,
        isCompleted: false
      }])
      setTodo('')
    }
  }

  const handleComplatedTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, complated: !todo.complated } : todo
    ))
  }

  const handleRemoveTodo = (tod) => {
    setTodos([...todos.filter((todo) => todo !== tod)])
  }

  const handleEditClick = (index) => {
    setEditTodoIndex(index)
    setEditTodoValue(todos[index])
    setEditTodoValue('')
  }

  const handleUptadeTodo = (index) => {
    if (editTodoValue !== '') {
      const uptadeTodos = [...todos]
      uptadeTodos[index] = {
        ...uptadeTodos[index],
        text: editTodoValue
      }
      setTodos(uptadeTodos)
      setEditTodoIndex(null)
      setEditTodoValue('')
    } else {
      setError('Boş bırakılamaz!')
    }
  }

  return (
    <div className='w-full h-[100vh] flex justify-center text-white bg-cyan-500'>
      <div className='w-6/12 bg-cyan-900 flex flex-col text-center pt-5 gap-5'>
        <h1 className='text-4xl'>To-Do List</h1>
        <Input todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleRemoveTodo={handleRemoveTodo}
          editTodoIndex={editTodoIndex}
          handleComplatedTodo={handleComplatedTodo}
          editTodoValue={editTodoValue}
          setEditTodoValue={setEditTodoValue}
          handleEditClick={handleEditClick}
          handleUptadeTodo={handleUptadeTodo}
          error={error}
        />
      </div>
    </div>
  )
}

export default App

