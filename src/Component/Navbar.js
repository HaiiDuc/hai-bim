import React from 'react'
import propType from 'prop-types'
import { connect } from 'react-redux'
const Navbar = ({ todos }) => {
    const length = todos.length
    return (
        <div className="navbar">
            <h2>Redux app</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Work : {length}</li>
            </ul>
        </div>
    )
}
Navbar.propType = {
    todos: propType.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos
})
export default connect(mapStateToProps, {})(Navbar)
