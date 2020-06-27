import React from 'react';
import TodoList from'./TodoList';
import TodoInput from './TodoInput';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.handleWishCreate = this.handleWishCreate.bind(this);
    this.handleWishDelete = this.handleWishDelete.bind(this);
    this.handleWishToggle = this.handleWishToggle.bind(this);
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

  /* toggle feature can be handle in two ways
    1. By passing the WishID                - Have to find the specific WishObject from the wishID and use object reference to find the index
    2. By passing the WishObject Reference  - Can directly use Wish Object Reference to find the index ( Better and easier way )
  */

  // 1. By passing the WishID
  // handleWishToggle (wishID) {
  //   // get the toggled object from array
  //   const toggledWish = this.state.data.find(wish => wish.id === wishID);

  //   const updatedData = [...this.state.data];
  //   const index = updatedData.indexOf(toggledWish);
  //   updatedData[index] = {...toggledWish};
  //   updatedData[index].completed = !updatedData[index].completed;
  //   this.setState({ data: updatedData });
  // }

  // 2. By passing the Wish Object Reference
  handleWishToggle (wishObj) {
    debugger;
    const updatedData = [...this.state.data];
    const index = updatedData.indexOf(wishObj);
    updatedData[index] = {...wishObj};
    updatedData[index].completed = !wishObj.completed;
    this.setState({ data: updatedData });
  }

  handleWishCreate () {
    const updatedData = [ ...this.state.data ];
    updatedData.push({ id: this.latestid + 1, description: this.state.wishInput, completed: false })
    this.latestid++;
    this.setState({ wishInput: '' , data: updatedData });
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
        <TodoList todoList={this.state.data} onWishDelete={this.handleWishDelete} onWishToggle={this.handleWishToggle}/>
      </div>
    );
  }
}

export default TodoApp;
