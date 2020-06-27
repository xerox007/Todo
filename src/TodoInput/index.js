import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

const TodoInput = (props) => {
    const { onWishCreate, onWishInputChange, wish } = props;
    return (
        <div className="form-row">
            <div className="col-lg-6 mb-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend">Enter your wish</span>
                    </div>
                    <input onChange={onWishInputChange} value={wish} type="text" className="form-control"  id="wish-input" placeholder="Your wish will come true..." />
                </div>
            </div>
            <div className="col-lg-4">
                <button onClick={onWishCreate} type="button" className="btn btn-info"><FontAwesomeIcon icon={faMagic} className="mr-2" />Let's Do This</button>
            </div>
        </div>
    )
}

export default TodoInput;