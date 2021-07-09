import React from 'react';
import List from '../List/List.js';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Thing to do', <sup key='1'>soon!</sup>]} photo='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'>
          <p>I'm planning on doing all these things sooner, rather than later!</p>
        </List>
      </main>
    )
  }
}

export default App;
