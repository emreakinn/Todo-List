import React from 'react'

function Input({ todo, setTodo, handleAddTodo }) {
    return (
        <div className='w-full flex justify-center items-center gap-5'>
            <input
                className='xl:w-3/6 w-4/6 outline-none border-2 border-cyan-700 rounded-lg p-2 placeholder:text-white'
                type="text"
                placeholder='To-Do Giriniz...'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                onClick={handleAddTodo}
                className='xl:w-1/6 border-2 outline-none border-cyan-700 rounded-lg p-2 cursor-pointer'
            >
                <span className="block xl:hidden">Ekle</span>
                <span className="hidden xl:block">To-do Ekle</span>
            </button>
        </div>
    )
}

export default Input