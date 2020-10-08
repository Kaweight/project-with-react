import React from 'react';
import HeroImage from '../Hero/Hero.js'
import styles from './List.scss';

class List extends React.Component {
    render() {
        return (
            <section className={styles.component}>
                <HeroImage />
            </section>
        )
    }
}

export default List;
