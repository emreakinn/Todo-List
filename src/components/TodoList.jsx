import React from 'react'

function TodoList({ todos, handleRemoveTodo }) {
    return (
        <div className='w-full flex flex-col gap-2'>
            {
                todos.map((todo, i) => (
                    <div key={i} className='w-full flex justify-center px-10 items-center gap-5'>
                        <div className='w-4/6 text-start bg-red-500'>{todo}</div>
                        <button
                            onClick={() => handleRemoveTodo(todo)}
                            className='w-1/6 text-end cursor-pointer'>Sil
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList