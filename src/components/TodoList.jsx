import React from 'react'

function TodoList({ todos, handleRemoveTodo, editTodoIndex, setEditTodoIndex, editTodoValue, setEditTodoValue, handleUptadeTodo, handleEditClick }) {
    return (
        <div className='w-full flex flex-col gap-2'>
            {
                todos.map((todo, index) => (
                    <div key={index} className='w-full flex justify-center px-10 items-center'>
                        {
                            editTodoIndex === index ? (
                                <div className='w-full flex justify-center gap-5'>
                                    <input
                                        type="text"
                                        className='w-4/6 outline-none border-2 border-cyan-700 rounded-lg p-2 placeholder:text-white'
                                        value={editTodoValue}
                                        onChange={(e) => setEditTodoValue(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleUptadeTodo(index)}
                                        className='w-1/6 border-2 outline-none border-cyan-700 rounded-lg p-2 cursor-pointer'>
                                        Onayla
                                    </button>
                                </div>
                            ) : (
                                <div className='w-full flex justify-center gap-5'>
                                    <div className='w-4/6 text-start break-words border-2 border-cyan-700 rounded-lg p-2'>
                                        {todo}
                                    </div>
                                    <button
                                        onClick={() => handleEditClick(index)}
                                        className='w-1/6 border-2 outline-none border-cyan-700 rounded-lg p-2 cursor-pointer'>
                                        Düzenle
                                    </button>
                                </div>
                            )
                        }
                        <button
                            onClick={() => handleRemoveTodo(todo)}
                            className='w-1/6 border-2 border-cyan-700 rounded-lg p-2 cursor-pointer'>
                            Sil
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList
