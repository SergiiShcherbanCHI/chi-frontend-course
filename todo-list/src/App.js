import React, { Component } from 'react';
import './App.css';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: '',
            filter: 'all', // all, completed, incomplete
        };
    }

    componentDidMount() {
        console.log('TodoApp component has mounted.');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks !== this.state.tasks || prevState.filter !== this.state.filter) {
            console.log('TodoApp component has updated.');
        }
    }

    handleInputChange = (event) => {
        this.setState({ newTask: event.target.value });
    };

    addTask = () => {
        if (this.state.newTask.trim()) {
            const newTask = {
                id: Date.now(),
                text: this.state.newTask,
                completed: false,
            };
            this.setState((prevState) => ({
                tasks: [...prevState.tasks, newTask],
                newTask: '',
            }));
        }
    };

    toggleTaskCompletion = (taskId) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    deleteTask = (taskId) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== taskId),
        }));
    };

    setFilter = (filter) => {
        this.setState({ filter });
    };

    renderTasks = () => {
        const { tasks, filter } = this.state;
        return tasks
            .filter((task) => {
                if (filter === 'completed') return task.completed;
                if (filter === 'incomplete') return !task.completed;
                return true;
            })
            .map((task) => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => this.toggleTaskCompletion(task.id)}
                    />
                    <span>{task.text}</span>
                    <button className="delete" onClick={() => this.deleteTask(task.id)}>Delete</button>
                </li>
            ));
    };

    render() {
        return (
            <div className="container">
                <h1>To Do List</h1>
                <div className="input-group">
                    <input
                        type="text"
                        value={this.state.newTask}
                        onChange={this.handleInputChange}
                        placeholder="Add new task"
                    />
                    <button className="add" onClick={this.addTask}>Add</button>
                </div>
                <div className="filter-buttons">
                    <button onClick={() => this.setFilter('all')}>All</button>
                    <button onClick={() => this.setFilter('completed')}>Completed</button>
                    <button onClick={() => this.setFilter('incomplete')}>Incomplete</button>
                </div>
                <ul>{this.renderTasks()}</ul>
            </div>
        );
    }
}

export default TodoApp;
