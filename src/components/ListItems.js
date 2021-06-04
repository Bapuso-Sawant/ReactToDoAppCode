import React from 'react'
import './ListItemsStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'; //to add animation on list

function ListItems(props) {
    const items = props.items;
    const listItems = items.map((item) =>{
        return <div className="list" key={item.key}>
            <p>
                <input type="text"
                 id={item.key}
                 value={item.text}
                 onChange={
                     (e) =>{
                         props.setUpdate(e.target.value,item.key);
                     }
                 }    
                 />
                <span>
                    <FontAwesomeIcon className="faicons" 
                    icon="trash"
                    onClick={ ()=> props.deleteItem(item.key)     
                    }/>
                </span>
            </p>            
        </div>
    })
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
            {/* To add icon we usd npm @fortawesome so first install it refer --> https://github.com/FortAwesome/react-native-fontawesome*/}
        </div>
    )
}

export default ListItems