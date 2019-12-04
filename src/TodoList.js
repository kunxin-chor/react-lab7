import React from 'react'

export default function TodoList(props)
{
    return (
        <ul>
            {
             props.todos.map((todo) =>{
                 return <li>{todo.title}</li>
             } )
            }
            
        </ul>
    )
}