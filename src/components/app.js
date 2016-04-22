import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './childComponent';

export default class App extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {name: ['Human', 'Martian', 'Neptunian']}
    this.addName = this.addName.bind(this);
  }

  addName() {
    this.state.name.push(document.getElementById('name').value);
    this.setState(this.state);
  }

  render() {
    return(
      <div>
        <h2> Hello Aliens</h2>
        <input id='name'/>
        <button onClick={ this.addName }>Add</button>
        <ChildComponent name={ this.state.name }/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)
