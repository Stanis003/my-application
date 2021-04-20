import React from 'react';
import styled from 'styled-components';

const BlockHeader = styled.div`
    display:flex;    
    align-items: flex-end;
    justify-content: space-between;
    h1 {
      font-size: 26px;
    }
    h2 {
    font-size: 1.2rem;
    color: grey;
    }
`
 
const AppHeader = ({liked, allPost}) => {
    return ( 
        <BlockHeader>
            <h1>Stas Mandabura</h1>
            <h2>{allPost} posts, liked {liked} </h2>
        </BlockHeader>
    )
}
export default AppHeader;