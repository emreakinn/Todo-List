import './App.css'
import Input from './components/Input'

function App() {

  return (
    <div className='w-full h-[100vh] flex justify-center text-white'>
      <div className='w-6/12 bg-cyan-900 flex flex-col text-center pt-5 gap-5'>
        <h1 className='text-4xl'>To-Do List</h1>
        <Input />
      </div>
    </div>
  )
}

export default App

