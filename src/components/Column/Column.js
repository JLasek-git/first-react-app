import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from './Icon.js';
import { settings} from '../../data/dataStore';


class Column extends React.Component {
    state = {
      cards: this.props.cards || [],
    }

    static propTypes = {
      title: PropTypes.node.isRequired,
      cards: PropTypes.array,
      icon: PropTypes.string,
    }


    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length - 1].key+1: 0,
              title,
              element: [],
            },
          ],
        }
      ));
    }

    render(){
      return(
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={this.props.icon} />
            </span>
            {this.props.title}
          </h3>
          <div>
            {this.state.cards.map(({key, ...cardProps}) => (
              <Card key={key} {...cardProps} />
            ))}
          </div>
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div>
        </section>
      );
    }
}


export default Column;