import React from 'react'
import propType from 'prop-types'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
const Todos = ({ todos }) => {
    return (
        <div className="todo-list">
            <ul>
                <TodoForm />
                {todos.map(todo =>
                    <li key={todo.id}>
                        {todo.title}
                        <input type="checkbox"></input>
                        <button>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

Todos.propType = {
    todos: propType.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos
})

export default connect(mapStateToProps, {})(Todos)
