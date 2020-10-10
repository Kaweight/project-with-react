import React from 'react';
import styles from './column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';

class Column extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
            </section >
        )
    }
}

export default Column;