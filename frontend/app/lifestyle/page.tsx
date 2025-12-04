import React from "react";
import styles from "./Lifestyle.module.css";
import { title } from "process";

const LifeStylePage: React.FC = () => {
    const practices = [
        {
            title: "Daily meditation and mindfulness practices",
            description: "Starting each day with 15 minutes of meditation to maintain focus and clarity",
            img: "/images/tea.jpg"
        },
        {
            title: "Structured learning routines for new technologies",
            description: "Dedicating 1 hour daily to learning a new concept in AI & ML.",
            img: "/images/lightbulb.jpg"
        },
        {
            title: "Building meaningful connections in the tech community",
            description: "Actively participating in tech meetups, conferences, and mentoring and share my learning on LinkedIn.",
            img: "/images/heart.jpg"
        },
        {
            title: "Setting boundaries between work and personal time",
            description: "Maintaining a healthy work-life balance through time blocking and digital detox periods.",
            img: "/images/time.jpg"
        }
    ]


    return (

        <div>
            {/*Hero Section */}
            <section className={styles.container}>
                <div className={styles.heroSection}>
                    <h1 className={styles.heroTitle}>
                        LifeStyle & Insights 
                    </h1>
                    <p className={styles.heroDescription}>
                        Beyond code and alogorithms - Sharing thoughts on proudctivity, work-life balance, and the intersection of technology and life. 
                    </p>
                </div>

                {/* Work-Life In Tech Content */}
                <section className={styles.workLifeContainer}>
                    <div className={styles.descriptionContainer}>
                    <h2 className={styles.sectionTitle}>
                        Work-Life Integration in Tech
                    </h2>
                    <p className={styles.sectionDescription}>
                        As a a Full Stack AI Engineeer, finding balance between staying current with rapidly evolving technology and maintaining personal well-being is crucial. I share strategies for sustainable career growth, continious learning, and mental health in the tech inudstry.
                        <br />
                        <br />
                        The Key is not perfection balance - It is intentional inegration. By aligining our professional growth with personal values and well-being pratices, we can build sustainiable, fulfilling caereers that do not come at the cost of our health or relationships.                       
                    </p>
                    <button className={styles.letsConnectButton}>
                        Let's Connect
                    </button>    
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src="/images/work-life.jpg"
                            alt="Work-Life in Tech"
                            className={styles.workLifeBalanceImage}
                        />
                    </div>
                </section>
                </section>
                
            {/* Tips & Practices Section */}
            <div className={styles.tipsPracticesContainer}>
                {practices.map((practice, index) => (
                <div key={index} className={styles.practiceCard}>
                    <div className={styles.iconStyle}>
                        <img 
                            src={practice.img} 
                            alt={practice.title}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <h3 className={styles.practiceTitle}>{practice.title}</h3>
                        <p className={styles.practiceDescription}>{practice.description}</p>   
                    </div>                
                </div>
             ))}
           </div>
    </div>
    );
};

  export default LifeStylePage;

    

           