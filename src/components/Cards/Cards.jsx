import React from 'react';
import { Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed) {
        return 'Loading...';
    }
    
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={cx(styles.card, styles.infected)}>
                    <h2 className={styles.cardTitle}>
                    Infected
                    </h2>
                    <h3 className={styles.number}>
                        <CountUp start={0} end={confirmed.value} duration={1.5} separator=","/>    
                    </h3>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">
                    Number of active cases of COVID 19
                    </Typography>
                </div>
            </div>
            <div className={styles.card}>
                <div className={cx(styles.card, styles.recovered)}>
                    <h2 className={styles.cardTitle}>
                    Recovered
                    </h2>
                    <h3 className={styles.number}>
                        <CountUp start={0} end={recovered.value} duration={2} separator=","/>
                    </h3>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">
                    Number of active cases of COVID 19
                    </Typography>
                </div>
            </div>
            <div className={styles.card}>
                <div className={cx(styles.card, styles.deaths)}>
                    <h2 className={styles.cardTitle}>
                    Deaths
                    </h2>
                    <h3 className={styles.number}>
                        <CountUp start={0} end={deaths.value} duration={1.5} separator=","/>
                    </h3>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">
                    Number of active cases of COVID 19
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default Cards;