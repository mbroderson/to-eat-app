import React from 'react';
import ToeatListItem from './toeat-list-item';
import ToeatForm from './toeat-form';

const defaultToeats = [
  {name: 'pasta', eaten: true},
  {name: 'burger', eaten: false},
  {name: 'szwajcar', eaten: false}
];

export default class ToeatList extends React.Component {
  constructor(props){
    super(props);
    this.state = {toeats: defaultToeats};
    this.onToeatAdd = this.onToeatAdd.bind(this);
  }

  onToeatAdd(name){
    this.setState({
      toeats: [
        ...this.state.toeats,
        {name: name, eaten: false}
      ]
    })
  }

  render(){
    const {toeats} = this.state;
    return (
      <div>
        <ToeatForm onSubmit={this.onToeatAdd}/>
        <ul style={{listStyle: 'none'}}>
          {
            toeats.map( (toeat) => <ToeatListItem {...toeat} />)
          }
        </ul>
      </div>
    );
  }
}
