import React from 'react';

class ToEatItem extends React.Component {
  render () {
    const {name, eaten, onCheck, onRemove} = this.props;

    const backgroundColor = eaten ? '#ddd' : '#fff';

    return (
      <li style={{...styles.item, backgroundColor}}>
        <div style={styles.remove}>
          <button onClick={onRemove}>remove</button>
        </div>
        <div style={styles.header}>
          <span>{name}</span>
          <label>
            eaten:
            <input type='checkbox' checked={eaten} onClick={onCheck}></input>
          </label>
        </div>
      </li>
    );
  }
}

const styles = {
  remove: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  item: {
    padding: '6px 12px',
    border: '1px solid #ddd',
    marginBottom: '5px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export default ToEatItem;
