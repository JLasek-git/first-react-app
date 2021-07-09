import React from 'react';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} photo={this.props.photo} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Animals' />
          <Column title='Plants' />
          <Column title='Minerals' />
        </div>
      </section>
    )
  }
}

export default List;
