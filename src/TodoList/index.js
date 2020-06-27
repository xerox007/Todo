import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const { todoList, onWishDelete, onWishToggle } = props;
    return(
        <div>
            <div className="list-group">
                { todoList.map((todo) => <TodoItem key={todo.id} todo={todo} onWishDelete={onWishDelete} onWishToggle={onWishToggle}/>)}
            </div>
        </div>

    );
}
export default TodoList;
