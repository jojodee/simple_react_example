import React from 'react';

export default class extends React.Component {
  constructor( props ) {
    super( props );
    console.log(props);
  }

  render() {

    var names = this.props.name.map(function(item, index) {
      return(
        <p key={ index }>Hello { item }</p>
      )
    });

    return(
      <div>
       { names }
      </div>
    )
  }
}
