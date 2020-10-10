import React from 'react';
import Column from '../Column/Column.js';
import List from '../List/List.js';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>

        <List title={['Things to do ', <sup>soon!</sup>]}
          spaceImage="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" >
          <p>Interesting things I want to check out!</p>
        </List>
      </main >
    )
  }
}

export default App;
