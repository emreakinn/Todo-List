import React from 'react'
import { LuBadgePlus } from "react-icons/lu";
import { BsPatchMinus } from "react-icons/bs";

function TodoList({ todos, handleRemoveTodo, editTodoIndex, error, handleComplatedTodo, editTodoValue, setEditTodoValue, handleUptadeTodo, handleEditClick }) {
    return (
        <div className='w-full flex flex-col gap-2'>
            {
                todos.map((todo, index) => (
                    <div key={index} className='w-full flex justify-center px-10 items-center gap-5'>
                        {
                            editTodoIndex === index ? (
                                <div className='w-4/6 flex items-center gap-5'>
                                    <input
                                        type="text"
                                        className='w-full outline-none border-2 border-cyan-700 rounded-lg p-2 placeholder:text-white'
                                        value={editTodoValue}
                                        onChange={(e) => setEditTodoValue(e.target.value)}
                                    />
                                    {error && (
                                        <div className='w-1/6 text-red-500 text-center'>{error}</div>
                                    )}
                                    <button
                                        onClick={() => handleUptadeTodo(index)}
                                        className='w-1/6 border-2 outline-none border-cyan-700 rounded-lg p-2 cursor-pointer'>
                                        Onayla
                                    </button>
                                </div>
                            ) : (
                                <div className='w-4/6 flex items-center gap-5'>
                                    <div
                                        style={{
                                            backgroundColor: todo.complated ? '#4CAF50' : ''
                                        }}
                                        className='w-full text-start break-words border-2 border-cyan-700 rounded-lg p-2'>
                                        {todo.text}
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
                            className=' border-2 border-cyan-700 rounded-lg px-5 py-2 cursor-pointer'>
                            Sil
                        </button>
                        <button onClick={() => handleComplatedTodo(todo.id)} className='cursor-pointer'>
                            {
                                todo.complated ? <BsPatchMinus size={30} /> : <LuBadgePlus size={30} />
                            }
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList
