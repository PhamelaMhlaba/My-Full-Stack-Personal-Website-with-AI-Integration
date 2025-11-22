import React from 'react';
import styles from './OurProcess.module.css';

export default function OurProcess () {
    return (
        <section className={styles.ourProcessContainer}>
             {/* Tech Blog Header */}
            <div className={styles.ourProcessHeader}>
                <h2 className={styles.ourProcessTitle}>
                    Our Process
                </h2>
                <p className={styles.ourProcessDescription}>
                    A proven methodology to deliver AI solutions that drive real results
                </p>
            </div>
        </section>
    );
}