import React from 'react';
import styles from './OurProcess.module.css';

const OurProcess: React.FC =  () => {
    const ourProcess =[
        {
            value: "1",
            title: "Discovery",
            description: "We analyze your business needs and identify the best AI opportunities."
        },
        {
            value: "2",
            title: "Design",
            description: "Custom AI solution architecture tailored to your specific requirements."
        },
        {
            value: "3", 
            title: "Development",
            description: "Build and train your AI models with rigorous testing and optimization."
        },
        {
            value: "4",
            title: "Deployment",
            description: "Seamless integration with ongoing support and performance monitoring."
        }
    ]
    return (
        <section className={styles.ourProcessContainer}>
             {/* Tech Blog Header */}
            <div className={styles.ourProcessHeader}>
                <h2 className={styles.ourProcessHeaderTitle}>
                    Our Process
                </h2>
                <p className={styles.ourProcessDescription}>
                    A proven methodology to deliver AI solutions that drive real results
                </p>
            </div>

            {/* OurProcess Grid */}
            <div className={styles.ourProcessGrid}>
                {ourProcess.map((ourProcess, index) => (
                    <div key={index} className={styles.ourProcessCard}>
                    <h1 className={styles.ourProcessValue}>{ourProcess.value}</h1>
                    <h4 className={styles.ourProcessTitle}>{ourProcess.title}</h4>
                    <p className={styles.ourProcessDescription}>{ourProcess.description}</p>
                    </div> 
                ))}
            </div>
        </section>
    );
}
export default OurProcess;