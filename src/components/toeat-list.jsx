import React from 'react';
import ToEatItem from './toeat-list-item';

class ToEatList extends React.Component {
  render () {
    const {toeats, onCheckItem} = this.props;

    return (
      <ul style={styles.list}>
        {
          toeats.map((te, index) => {
            return <ToEatItem
                      onCheck={() => onCheckItem(index)}
                      key={`item-${index}`}
                      {...te} />
          })
        }
      </ul>
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
