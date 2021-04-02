import React from 'react';
import './post-add-form';
const PostAddForm =() => {
    return ( 
        <form className="button-panel d-flex">
            <input 
                type="text"
                placeholder="what are you thinking now?"            
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary">
                Add post
            </button>
        </form>
    )
}
export default PostAddForm;