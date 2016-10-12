import React from 'react';
import axios from 'axios';
import update from 'react-addons-update';
import ToEatList from './toeat-list';
import ToEatForm from './toeat-form';

const toeats = [
  // {name: 'pasta', eaten: false},
  // {name: 'burger', eaten: false},
  // {name: 'szwajcar', eaten: false}
];

class ToEatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toeats: toeats};
    this._addToEat = this._addToEat.bind(this);
    this._checkItem = this._checkItem.bind(this);
    this._removeItem = this._removeItem.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000').then((response) => {
      this.setState({
        toeats: response.data.toeats
      });
    });
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

  _removeItem(index) {
    const newToeats = update(this.state.toeats, {$splice: [[index, 1]]});
    this.setState({toeats: newToeats});
  }

  render () {
    const {toeats} = this.state;

    return (
      <div>
        <ToEatForm onSubmit={this._addToEat} />
        <ToEatList
          toeats={toeats}
          onCheckItem={this._checkItem}
          onRemoveItem={this._removeItem} />
      </div>
    );
  }
}

export default ToEatContainer;
