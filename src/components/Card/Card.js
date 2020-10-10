import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        cards: PropTypes.array,
    }

    render() {
        return (
            <section className={settings.component}>
                {this.props.title}
            </section>
        )
    }

}

export default Card;