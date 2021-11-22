import React from 'react';

function UserDetails(props){
    const items = props.items;

    const listItems = items.map(item =>
   {
       return <div key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
        <button onClick={() => {
            props.deleteItem(item.key)
        }} >Delete</button>
        </span>
     </p>
     
    </div>})
    return <div>
        <h1>
        {listItems}
        </h1>
    
    </div>;
  }

  export default UserDetails;