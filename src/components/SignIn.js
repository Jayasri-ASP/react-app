import React from 'react';
import { login } from '../utils';
import UserDetails from './UserDetails'

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:'',
        pass: '',
      },
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:'',
        pass: '',
      },
    })
    login();
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      },
    })
  }
 
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  handleStatusChanged(e) {

    this.setState({ currentItem:{ status: e.target.value }});
  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <h1>Login Page</h1>
          UserName : <input type="text" placeholder="Enter the  username" value= {this.state.currentItem.text} onChange={this.handleInput}></input><br></br>
          Password : <input type="password" value= {this.state.currentItem.pass}/>
          <button type="submit" onClick={this.addItem}>Login</button><br></br>
        <p>{this.state.items.text}</p>
          <UserDetails items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
    
    </div>
  );
 }
}


export default SignIn;
