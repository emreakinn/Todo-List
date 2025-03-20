import React from 'react'

function Input({ todo, setTodo, handleAddTodo }) {
    return (
        <div className='w-full flex justify-center gap-5'>
            <input
                className='w-3/6 outline-none border-2 border-cyan-700 rounded-lg p-2 placeholder:text-white'
                type="text"
                placeholder='To-Do Giriniz...'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                onClick={handleAddTodo}
                className='w-1/6 border-2 border-cyan-700 rounded-lg p-2 cursor-pointer'
            >To-do Ekle</button>
        </div>
    )
}

export default Input