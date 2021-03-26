import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '',filtertext:'' };


  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            placeholder="Add a new task"
            onChange={this.handleChange}
            value={this.state.text}
          />
           <button>
            Add #{this.state.items.length + 1}
          </button>
            <input
            id="new-todo-search"
            placeholder="Search a Task"
            onChange={this.handleSearch}
            value={this.state.filtertext}
          />
          
    
        </form>
        <TodoList items={this.state.items}  filtertext={this.state.filtertext} delete={this.handleDelete}/>

      </div>
    );
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }
  handleSearch = (e) => {
    this.setState(state => ({
      filtertext: e.target.value,
    }));

  }

handleDelete =(updatedList)=>{
this.setState({
  items: updatedList,
})

}
  handleSubmit=(e)=> {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
      filtertext: '',
    }));
  }
}

class TodoList extends React.Component  {
  // constructor(props) {
  //   super(props);
  //   this.state = { items: [], text: '' };
state={
  items: [], text: ''
}

  // }
  onClickClose=(ids)=> {
  
    const updatedlist = this.props.items.filter(item=>item.id !== ids);
    this.props.delete (updatedlist);

    console.log(updatedlist)
   //  this.setState({items:updatedlist});

  }
  render() {
    return (
      <table>
        <thead>
          <th>Todos</th>
          <th>Finished Todo</th>
        </thead>
        <tbody>

        {this.props.items.map((item) => {
         
          console.log(this.props.filtertext)

          if(item.text.includes(this.props.filtertext)){
            return(
           <tr>
            <td key={item.id}>{item.text}</td> <td> 
               <button type="button" className="close" onClick={()=>this.onClickClose(item.id)}>&times;</button></td>
          </tr>  
          
          
          );}

         else{
           return(
        null
            ); }
  })}
        </tbody>
      </table>
    );
  }
}

export default App;
