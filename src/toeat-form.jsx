import React from 'react';

export default class ToeatForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const {value} = this.input;
    this.props.onSubmit(value);
  }

  render(){
    return (
      <div style={styles.container}>
        <input placeholder='Enter food name' ref={(ref) => this.input = ref} />
        <button onClick={this.onSubmit}>add toeat</button>
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
