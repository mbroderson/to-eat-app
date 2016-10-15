import React from 'react';

export default class ToeatListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {eaten: props.eaten};
    this.toggleChecbkox = this.toggleChecbkox.bind(this);
  }

  toggleChecbkox() {
    this.setState({
      eaten: !this.state.eaten
    });
  }

  render(){
    const {name, onRemove} = this.props;
    const {eaten} = this.state;
    return (
      <li style={{backgroundColor: eaten ? 'red' : 'green', color: 'white', padding: '5px 15px', marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
        <span style={{marginRight: 30}}>{name}</span>
        <div>
          <label> eaten:</label>
          <input type='checkbox' checked={eaten} onClick={this.toggleChecbkox}/>
          <button onClick={onRemove}>remove</button>
        </div>
      </li>
    );
  }
}
