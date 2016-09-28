import React from 'react';

class ToEatForm extends React.Component {
  constructor(props) {
    super(props);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit() {
    const {value} = this.input;
    this.props.onSubmit(value);
  }

  render () {
    const {onSubmit} = this.props;

    return (
      <div style={styles.container}>
        <input placeholder='Enter food name' ref={(ref) => this.input = ref} />
        <button onClick={this._onSubmit}>add toeat</button>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '400px',
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

export default ToEatForm;
