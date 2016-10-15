import React from 'react';
import update from 'react-addons-update';
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
    this.onToeatRemove = this.onToeatRemove.bind(this);
  }

  onToeatAdd(name){
    this.setState({
      toeats: [
        ...this.state.toeats,
        {name: name, eaten: false}
      ]
    })
  }

  onToeatRemove(index){
    const newToeats = update(this.state.toeats, {$splice: [[index, 1]]});
    this.setState({toeats: newToeats});
  }

  render(){
    const {toeats} = this.state;
    return (
      <div>
        <ToeatForm onSubmit={this.onToeatAdd}/>
        <ul style={{listStyle: 'none'}}>
          {
            toeats.map( (toeat, index) => <ToeatListItem key={toeat.name} onRemove={() => this.onToeatRemove(index)} {...toeat} />)
          }
        </ul>
      </div>
    );
  }
}
