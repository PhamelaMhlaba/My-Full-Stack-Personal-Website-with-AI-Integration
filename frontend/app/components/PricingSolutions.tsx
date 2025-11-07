import React from 'react';
import styles from './PricingSolutions.module.css';

const Pricing: React.FC = () => {
    const pricing = [
        {
            icon: '🤖',
            title: 'Starter',
            value: "$2000",
            description: 'Full-Stack applications with integrated LLM capabilities, from intelligent chatbots to automated workflow',
            feature: [
                'Custom LLM inegration',
                'Real-time data processing',
                'Scalable backend architecture',
                'Production monitoring'
            ]
        },
        {
            icon: '⚙️',
            title: 'Professional',
            value: "$7000",
            description: 'Production-ready machine learning infrastrcture with automated training, deployment, and monitoring systems',
            feature: [
                'MLOps infrastructure',
                'Automated model desployment',
                'Performance montoring',
                'Data pipeline optimzation',
            ]
        },
        {
            icon: '🚀',
            title: 'Enterprise',
            value: "Custom",
            description: 'Full- stack automation platforms that leverages AI to optimize complex business processes and decison workflows',
            feature: [
                'API-first architecture',
                'Event-driven processing',
                'Microservices',
                'Cloud-native deployment',
            ]
        }
    ];

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>
                    Choose Your AI Solution
                </h1>
                <p className={styles.headerDescription}>
                    Flexible pricing options to fit your business size and requirements 
                </p>
            </div>

            {/* Pricing Grid */}
            <div className={styles.pricingGrid}>
                {pricing.map((pricing, index) => (
                    <div key={index} className={styles.pricingCard}>
                    <div className={styles.pricingIcon}>{pricing.icon}</div>
                    <h2 className={styles.pricingTitle}>{pricing.title}</h2>
                    <h3 className={styles.pricingValue}>{pricing.value}</h3>
                    <p className={styles.pricingDescription}>{pricing.description}</p>
                    <ul className={styles.featuresList}>
                        {pricing.feature.map((feature, featureIndex) => (
                            <li key={featureIndex} className={styles.featureItem}>
                                 <span className={styles.checkIcon}>✓</span>
                                {feature}
                            </li>
                           ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing ; 