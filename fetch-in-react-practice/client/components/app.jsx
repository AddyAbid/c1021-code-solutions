import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(todoList => {
        this.setState({
          todos: todoList
        });
      });
  }

  addTodo(newTodo) {
    fetch('/api/todos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newTodo) })
      .then(response => response.json())
      .then(added => {
        this.setState(prevState => ({
          todos: prevState.todos.concat(added)
        }));
      });
  }

  toggleCompleted(todoId) {
    let todoIndex;
    const copyArr = [...this.state.todos];

    for (let i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].todoId) {
        todoIndex = i;
      }
    }

    const target = copyArr[todoIndex];
    for (const property in target) {
      const value = target[property];
      if (value && typeof value === 'object') {
        target[property] = value;
      }
    }

    target.isCompleted === true
      ? target.isCompleted = false
      : target.isCompleted = true;

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(target)
    })
      .then(response => response.json())
      .then(data => {
        copyArr[todoIndex] = data;
        this.setState({
          todos: copyArr
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
