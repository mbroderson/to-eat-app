import React from 'react';

class ToEatItem extends React.Component {
  render () {
    const {name, eaten, onCheck} = this.props;

    return (
      <li style={styles.item} onClick={onCheck}>
        <span>{name}</span>
        <label>
          eaten:
          <input type='checkbox' checked={eaten}></input>
        </label>
      </li>
    );
  }
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 12px',
    border: '1px solid #ddd',
    marginBottom: '5px'
  }
};

export default ToEatItem;
