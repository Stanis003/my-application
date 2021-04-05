import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
export default class App extends Component {
    state = {
        data : [
                {label:'Going to learn Recat', important: true, like: false, id:1 },
                {label:'That is good', important: false, like: true, id:2 },
                {label:'I need...', important: false, like: false, id:3 }
            ],
            term:''
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
            const newItem = {...old, like:!old.important};
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
    render(){
        const {data, term} = this.state;
        const liked = data.filter(item=>item.like).length;
        const allPost = data.length;

        const visiblePosts = this.serchPost(data, term);

        return (
            <div className="app">
                <AppHeader 
                liked={liked}
                allPost={allPost}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/> 
                    <PostStatusFilter/>   
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onTogleImportant={this.onTogleImportant}
                    onTogleLiked={this.onTogleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }

}
