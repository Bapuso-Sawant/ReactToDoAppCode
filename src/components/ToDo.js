import React, { Component } from 'react'
import ToDoStyle from './ToDoStyle.css'
import ListItems from './ListItems'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

export class ToDo extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleIntput = this.handleIntput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }
    
    handleIntput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    addItem(e){
        e.preventDefault(); 
        const newItem = this.state.currentItem;
        //console.log(newItem);
        if(newItem.text !== ""){
            const newitems=[...this.state.items,newItem]
            this.setState({
                items:newitems,
                currentItem:{
                    text:'',    //to become input empty again
                    key:''
                }
            })
        }        
    }

    deleteItem(key){
        const filteredItems = this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items:filteredItems,
            });
    }
    setUpdate(text,key){
        const items = this.state.items;
        items.map(item =>{
            if(item.key===key){
                item.text = text;
            }
        });
        this.setState({
            items:items
        });
    }
    render() {
        return (
            <div>
                <header className="ToDo">

                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter Text here" 
                          value={this.state.currentItem.text}  
                          onChange={this.handleIntput}
                        />
                        <button type="submit">Add</button>
                    </form>
                    <ListItems items={this.state.items}
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}></ListItems>
                </header>   
            </div>
        )
    }
}

export default ToDo
