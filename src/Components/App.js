import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListTable from './ListTable/ListCity';
import ListTableAdd from './ListTableAdd/ListTableAdd';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/style.css'

class App extends Component {

  state = {
    apiArray: [],
    userinput: '',
  }

  handlerStateInput = (event) => {
    const inputData = event.target.value

    console.log(inputData, "inputData")

    this.setState({
      userinput: inputData
    })
  }

  handleState = (value) => {
    
    const {apiArray} = this.state

    const allData = [...apiArray, this.state.userinput]

    this.setState({
      apiArray: allData
    })

    value.preventDefault();
  }

  removeList = (i) => {
    const {apiArray} = this.state

    let newItems = apiArray.slice();
    newItems.splice(i, 1);
    this.setState({apiArray: newItems});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => this.setState({
    apiArray: data
  }))
  }

  render() {
    const {apiArray} = this.state

    console.log(this.state, "Api Data Render")
    return(
      <>
      <ListTableAdd handlerStateInput={this.handlerStateInput} handleState={this.handleState} />
      <ListTable apiArrayData={apiArray} removeList={this.removeList} />
      </>

    )
  }
  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//     </div>
//   );
// }


export default App;
