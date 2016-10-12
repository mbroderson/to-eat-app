import React from 'react';
import ToEatItem from './toeat-list-item';

class ToEatList extends React.Component {
  render () {
    const {toeats, onCheckItem, onRemoveItem} = this.props;

    return (
      <div>
        <h2>ToEat list</h2>
        <ul style={styles.list}>
          {
            toeats.map((te, index) => {
              return <ToEatItem
                onCheck={() => onCheckItem(index)}
                onRemove={() => onRemoveItem(index)}
                key={`item-${index}`}
                {...te} />
            })
          }
        </ul>
      </div>
    );
  }
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    width: '400px'
  }
};

export default ToEatList;
