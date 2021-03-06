import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
    `
export default class App extends Component {
    state = {
        data : [
                {label:'Going to learn Recat', important: true, like: false, id:1 },
                {label:'That is good', important: false, like: true, id:2 },
                {label:'I need...', important: false, like: false, id:3 }
            ],
            term:'',
            filter: 'all'
    }
    maxId = 4;

    deleteItem=(id)=>{
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return{
                data:newArr
            }
        });
    }

    addItem=(body)=>{
       const newItem = {
           label: body,
           important: false,
           id: this.maxId++
       }
       this.setState(({data})=>{
        const newArr = [...data, newItem];
        return{
            data: newArr
        }
       });
    }

    onTogleImportant = (id) => {
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important:!old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return{
                data: newArr
            }
        })
    }

    onTogleLiked = (id) => {
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return{
                data: newArr
            }
        })
    }

    onUpdateSearch =(term)=>{
        this.setState({term})
    }
     
    serchPost = (items, term) =>{
        if(term.length===0){
            return items
        }
        return items.filter((item)=>{
            return item.label.indexOf(term)> -1
        })
    }
    filterPost=(items, filter)=>{
        if(filter === 'like'){
            return items.filter(item=>item.like)
        } else {
            return items
        }
    }
    onFilterselect =(filter)=>{
        this.setState({filter})
    }

    render(){
        const {data, term, filter} = this.state;
        const liked = data.filter(item=>item.like).length;
        const allPost = data.length;
        const visiblePosts = this.filterPost(this.serchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader 
                liked={liked}
                allPost={allPost}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/> 
                   <PostStatusFilter
                    filetr={filter}
                    onFilterselect={this.onFilterselect}/>   
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onTogleImportant={this.onTogleImportant}
                    onTogleLiked={this.onTogleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }

}
