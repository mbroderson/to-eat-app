import React from 'react';
import {Provider} from 'react-redux';
import store from 'stores';
import ToEatContainer from 'components/toeat-container';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <h1>To Eat App</h1>
          <ToEatContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
