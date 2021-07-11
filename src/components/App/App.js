import React from 'react';
import List from '../List/List.js';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import styles from './App.scss';
import {pageContents, listData} from '../../data/dataStore.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    )
  }
}

export default App;
