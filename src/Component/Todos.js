import React, { useEffect } from 'react'
import propType from 'prop-types'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { markComplete, deleteTodo, getTodo } from "../Store/Action/todoAction"
const Todos = ({
    todos,
    markComplete,
    deleteTodo,
    getTodo,
}) => {
    // getTODO
    useEffect(() => {
        getTodo()
    }, [])
    return (
        <div className="todo-list">
            <ul>
                <TodoForm />
                {todos.map(todo =>
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        {todo.title}
                        <input type="checkbox" onChange={markComplete.bind(this, todo.id)} ></input>
                        <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

Todos.propType = {
    getTodo: propType.func.isRequired,
    todos: propType.array.isRequired,
    markComplete: propType.func.isRequired,
    deleteTodo: propType.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos
})

export default connect(mapStateToProps, { getTodo, markComplete, deleteTodo })(Todos)
