import React from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList =({posts})=>{

    const elements = posts.map((item)=>{
        if ('object'=== typeof item){

            
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps}/>
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