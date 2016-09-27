import React from 'react';
import update from 'react-addons-update';
import ToEatList from './toeat-list';
import ToEatForm from './toeat-form';

const toeats = [
  {name: 'pasta', eaten: false},
  {name: 'burger', eaten: false},
  {name: 'szwajcar', eaten: false}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toeats: toeats};
    this._addToEat = this._addToEat.bind(this);
    this._checkItem = this._checkItem.bind(this);
  }

  _addToEat(toeatName) {
    const newToeat = {name: toeatName, eaten: false};

    this.setState({
      toeats: [...this.state.toeats, newToeat]
    });
  }

  _checkItem(index) {
    const {toeats} = this.state;
    const newItem = {...toeats[index], eaten: !toeats[index].eaten};

    const newToeats = update(this.state.toeats, {$splice: [[index, 1, newItem]]});
    this.setState({toeats: newToeats});
  }

  render () {
    return (
      <div>
        <h1>To Eat App</h1>
        <ToEatForm onSubmit={this._addToEat} />
        <ToEatList toeats={this.state.toeats} onCheckItem={this._checkItem} />
      </div>
    );
  }
}

export default App;
