import React from "react";
import styles from  "./LatestInsights.module.css";

export default function LatestInsights() {
    return (
        <section className={styles.latesInsightsContainer}>
            {/* Tech Blog Header */}
            <div className={styles.latesInsightsHeader}>
                <h3 className={styles.title}>
                    Latest Insights
                </h3>
                <p className={styles.headeDescription}>
                    Practical advice and reflections on building a sustainable tech career
                </p>
            </div>

        </section>
    )
}

