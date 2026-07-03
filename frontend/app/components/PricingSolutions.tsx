import React from 'react';
import styles from './PricingSolutions.module.css';
import Link from 'next/dist/client/link';

const Pricing: React.FC = () => {
    const pricing = [
        {
            title: 'Starter',
            value: "$500",
            description: 'Full-Stack applications with integrated LLM capabilities, from intelligent chatbots to automated workflow',
            feature: [
                'Custom LLM integration',
                'Real-time data processing',
                'Scalable backend architecture',
                'Production monitoring'
            ]
        },
        {
            title: 'AI Agents',
            value: "$1200",
            description: 'Intelligent AI agents that automate complex tasks, \nmake decisions, and integrate seamlessly with your \nexisting business workflows.',
            feature: [
                'Custom AI agent development',
                'Multi-agent workflow automation',
                'LLM-powered decision making',
                'Tool & API integration for agents',
            ]
        },
        {

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

                        {/* CTA Button */}
                        <div className={styles.button}>
                            <div className={styles.primaryButtonContainer}>
                                <Link href ="/contact-me" className="btn-primary">
                                    Get Started       
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing ; 