import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import { addTodo } from '../Store/Action/todoAction'
import { connect } from 'react-redux'
import propType from 'prop-types'
const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const onTitleChange = event => {
        setTitle(event.target.value)
    }
    const onFormSubmit = event => {
        event.preventDefault()
        if (title !== "") {
            const newTodo = {
                id: uuidv4(),
                title,
                completed: false,
            }
            addTodo(newTodo)
            setTitle("")
        }
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={onTitleChange}
                    value={title}>
                </input>
                <input
                    type="submit"
                    value="Add">
                </input>
            </form>
        </div>
    )
}

TodoForm.propType = {
    addTodo: propType.func.isRequired,
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { addTodo })(TodoForm)