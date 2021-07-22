import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={styles.static}>
            <h2 className={styles.staticTitle}>Statistics</h2>
            <ul className={styles.staticList}>
                <li className={styles.staticItem}>Good: {good}</li>
                <li className={styles.staticItem}>Neutral: {neutral}</li>
                <li className={styles.staticItem}>Bad: {bad}</li>
                <li className={styles.staticItem}>Total: {total}</li>
                <li className={styles.staticItem}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

export default Statistics;