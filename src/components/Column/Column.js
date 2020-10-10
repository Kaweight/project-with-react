import React from 'react';
import styles from './column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        title1: PropTypes.string,
        title2: PropTypes.string,
        title3: PropTypes.string,
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}></h3>

                <h3 className={styles.title}>{this.props.title1}</h3>
                <h3 className={styles.title}>{this.props.title2}</h3>
                <h3 className={styles.title}>{this.props.title3}</h3>

            </section >
        )
    }
}

export default Column;