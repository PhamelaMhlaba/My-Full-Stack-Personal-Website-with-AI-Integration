import React from 'react';
import styles from './Service.module.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Powered Applications',
      description: 'Full-stack applications with integrated LLM capabilities, from chatbots to intelligent automation systems.',
      features: [
        'GPT-4 powered responses',
        'Multi-language support', 
        'CRM integration'
      ]
    },
    {
      icon: '⚙️',
      title: 'ML Pipeline Engineering',
      description: 'End-to-end machine learning pipelines with robust data infrastructure and model deployment.',
      features: [
        'Sales forecasting',
        'Customer behavior prediction',
        'Risk assessment'
      ]
    },
    {
      icon: '🚀',
      title: 'Intelligent Automation',
      description: 'Full-stack automation solutions that leverage AI to optimize business processes and workflows.',
      features: [
        'Document processing',
        'Data extraction',
        'Workflow optimization'
      ]
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Enterprise <span className={styles.gradientText}>AI Engineering</span>
          </h2>
          <p className={styles.sectionDescription}>
            Full-stack AI solutions engineered for scale, performance, and business impact
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;