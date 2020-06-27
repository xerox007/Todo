import React from 'react';
import TodoList from'./TodoList';
import TodoInput from './TodoInput';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.handleWishCreate = this.handleWishCreate.bind(this);
    this.handleWishDelete = this.handleWishDelete.bind(this);
  }

  latestid = 5;
  state = {
    wishInput: '',
    data: [
      { id: 1, description: 'This is description1', completed: false },
      { id: 2, description: 'This is description2', completed: false },
      { id: 3, description: 'This is description3', completed: false },
      { id: 4, description: 'This is description1', completed: false },
      { id: 5, description: 'This is description5', completed: true }
    ]
  };

  handleWishDelete (wishID) {
    const updatedData = this.state.data.filter(wish => wish.id !== wishID);
    this.setState({ data: updatedData });
  }

  handleWishCreate () {
    const updatedData = [ ...this.state.data ];
    updatedData.push({ id: this.latestid + 1, description: this.state.wishInput, completed: false })
    this.latestid++;
    this.setState({ data: updatedData });
  }

  handleWishInputChange = (event) => {
    const { currentTarget } = event;
    this.setState({ wishInput: currentTarget.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="m-4">WishList: Add your wishes</h1>
        </div>
        <TodoInput wish={this.state.wishInput} onWishCreate={this.handleWishCreate} onWishInputChange={this.handleWishInputChange}/>
        <TodoList todoList={this.state.data} onWishDelete={this.handleWishDelete}/>
      </div>
    );
  }
}

export default TodoApp;
