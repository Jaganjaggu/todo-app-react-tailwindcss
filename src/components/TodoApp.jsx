import React, { useEffect, useState } from 'react'

function TodoApp() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const [editIndex, setEditIndex] = useState(-1)

    const addTask = () => {
        if (newTodo.trim() !== "")
        if(editIndex !== -1){
            const newTasks = [...todos]
            newTasks[editIndex] = newTodo
            setTodos(newTasks);
            setEditIndex(-1)
        }else{
            setTodos([...todos, newTodo])
        }
        setNewTodo('')
    }

    const deleteTask = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const editTask = (index) =>{
        setEditIndex(index)
        setNewTodo(todos[index])
    }

    return (
        <div className='flex justify-center pt-40'>
            <div className='bg-white opacity-70 rounded-3xl p-8'>
                <div className='flex justify-center items-center cursor-default bg-gray-300 rounded-3xl color-gray px-4 py-2'>
                    <img className='object-cover rounded-full w-16' src="https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg" alt="" />
                    <h1 className='text-3xl text-gray-600 p-4'>Todo List</h1>
                </div>
                <div className='mt-10 relative flex justify-center items-center'>
                    <div className='absolute left-2 pl-3'>
                        <i className="fa-solid fa-plus" style={{ color: '#fff' }}></i>
                    </div>
                    <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} type="text" id="newTodo" className='bg-gray-600 text-white rounded-s-full pl-10 p-2 w-full' placeholder='New Todo Items' />
                    {editIndex === -1 ?
                        <button onClick={addTask} className='bg-gray-400 p-2 pe-5 rounded-e-full'>Add</button> :
                        <button onClick={addTask} className='bg-gray-400 p-2 pe-5 rounded-e-full'>Edit</button>
                    }
                </div>

                <ul className='block w-full pt-6'>
                    {todos?.map((item, index) => (

                        <li key={index} className='w-full border-2 rounded-xl mb-3'>
                            <div className='float-right flex items-center cursor-pointer'>
                                <button id='1' onClick={(e) => { editTask(index) }}> <i class="fa-regular fa-pen-to-square"></i></button>
                                <button onClick={() => deleteTask(index)} id='1' className='float-right w-7 h-7 m-2.5 rounded-full bg-red-700 text-gray-200 shadow-md'>X</button>
                            </div>
                            <label htmlFor="1" className='p-3 block'>{item}</label>
                        </li>
                    ))

                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoApp