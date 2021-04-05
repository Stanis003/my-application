import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList =({posts, onDelete, onTogleImportant, onTogleLiked})=>{

    const elements = posts.map((item) => {
        if ('object'=== typeof item){

            
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={()=>onDelete(id)}
                    onTogleImportant={()=>onTogleImportant(id)}
                    onTogleLiked={()=>onTogleLiked(id)}/>
            </li>
            )
        }
    });
    return(
       <ul className="app-list list-geoup">
         {elements}
       </ul>
    )
}
export default PostList;