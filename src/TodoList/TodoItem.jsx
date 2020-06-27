import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPencilAlt, faTrash, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
    const { todo, onWishDelete } = props;
    const strikeThroughClass = todo.completed ? 'line-through' : ''; 
    const checkButtonClass = todo.completed ? 'btn-secondary' : 'btn-success'; 
    const checkButtonIcon = todo.completed ? faTimesCircle : faCheck;
    return( 
        <div className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-lg-10 col-sm-10">
                    <div className="mt-2" style={{ textDecorationLine: strikeThroughClass }}>
                        { todo.description }
                    </div>
                </div>
                <div className="col-lg-2 col-sm-2">
                    <button type="button" className={`btn ${checkButtonClass} btn-sm m-1`}><FontAwesomeIcon icon={checkButtonIcon}/></button>
                    <button type="button" className="btn btn-primary btn-sm m-1"><FontAwesomeIcon icon={faPencilAlt}/></button>
                    <button type="button" onClick={()=> onWishDelete(todo.id)} className="btn btn-danger btn-sm m-1"><FontAwesomeIcon icon={faTrash}/></button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;