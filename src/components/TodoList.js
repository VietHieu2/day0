import React from 'react'
import Todo from './Todo'

function TodoList({todoList, onCheckBtnClick}) {
  return (
    <div>
      {
        todoList.map(todo => 
          <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick}/>
        )
      }
    </div>
  )
}

export default TodoList
