import React, {Component} from 'react';
import './post-status-filter';

export default class PostStatusFilter extends Component {
    buttons=[
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Likes'}
    ]
    render(){
        const buttons = this.buttons.map(({name, label})=>{
            const active = this.props.filter === name;
            const clazz = active? 'btn-info' : 'btn-outline-secondary'
            return(
                <button key={name} 
                type="button" 
                className={`btn ${clazz}`}
                onClick={()=>this.props.onFilterselect(name)}>{label}</button>
            )
        });

       return(
        <div className="btn-group">
            {buttons}
        </div>
        )  
    }
   
}
