import React from 'react';
import styles from './Card.scss';


class Card extends React.Component {
    render() {
        return(
            <section className={styles.component}>
                <h5>{this.props.title}</h5>
            </section>

        )
    }
}

export default Card;