import React from 'react';
import styles from './ClientStories.module.css';

const ClientStories: React.FC = () => {
  const testimonials = [
    {
      stars: '★★★★★',
      quote: '“The AI chatbot transformed our customer service. Response time decreased by 80% and customer satisfaction increased significantly.”',
      name: 'Sarah Johnson',
      position: 'CEO, TechStartup Inc.'
    },
    {
      stars: '★★★★★',
      quote: '“Outstanding work on our web platform. The scalable architecture handles our growing user base perfectly.”',
      name: 'Michael Chen',
      position: 'CTO, GrowthCorp'
    },
    {
      stars: '★★★★★',
      quote: '“The predictive analytics solution increased our sales forecast accuracy by 40%. Incredible ROI.”',
      name: 'Emma Rodriguez',
      position: 'VP Sales, DataDriven LLC'
    }
  ];

  return (
    <section className={styles.clientStories}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.clientSectionTitle}>
            Client Success Stories
          </h2>
        </div>

        {/* Horizontal Testimonials Row */}
        <div className={styles.testimonialsRow}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>{testimonial.stars}</div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.clientInfo}>
                <p className={styles.clientName}>{testimonial.name}</p>
                <p className={styles.clientPosition}>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Let's discuss how AI can revolutionize your operations and drive growth.
          </p>
          <button className={styles.ctaButton}>
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientStories;