import React from "react";
import styles from "./Lifestyle.module.css";

export default function LifeStylePage () {
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
                        The Key is not perfection balance - It is intentional inegration. By aligining our professional growth with personal values and well-being pratices, we can build sustainiable, fulfilling caereers that do not come at the cost of our health or relationships.                       
                    </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src="/images/work-life.jpg"
                            alt="Work-Life in Tech"
                            className={styles.workLifeBalance}
                        />
                    </div>
                </section>
            </section>

            

            {/*Insights / Mini Articles */}
            <section>
                <ul>
                    <li>
                        <h5>
                            Daily meditation and mindful practices.
                        </h5>
                        <p>
                            Starting each day with 15 minutes of meditation to maintain focus and clarity.
                        </p>
                    </li>
                    <li>
                        <h5>
                            Structured learning connections in the tech community
                        </h5>
                        <p>
                            Dedicating 1 hour daily to learning a new concept in AI & ML.
                        </p>
                    </li>
                    <li>
                        <h5>
                            Building meaningful connections in the tech community.
                        </h5>
                        <p>
                            Actively participating in tech meetups, conferences, and mentoring and share my learning on LinkedIn.
                        </p>
                    </li>
                    <li>
                        <h5>
                            Setting boundaries between work and personal time.
                        </h5>
                        <p>
                            Maintaining a healthy work-life balance through time blocking and digital detox periods. 
                        </p>
                    </li>
                </ul>
            </section>
           
            {/* Development Philiophy section*/}
            <section>
                <div>
                    <h2>
                        My Development Philosophy.
                    </h2>
                        <ul>
                            <li>
                                <h3>
                                    Purpose-Driven Philosophy.
                                </h3>
                                <p>
                                    Every line of code should solve a real problem and create genuine value for the user and business. 
                                </p>
                            </li>
                            <li>
                                <h3>
                                    Continuous Growth
                                </h3>
                                <p>
                                    Embracing lifelong learning while maintaining sustainable practices that prevent burnout.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    Collaborative Impact
                                </h3>
                                <p>
                                    Building not just great software, but also great teams and meaningful profesional reationships.
                                </p>
                            </li>
                        </ul>
                </div>
            </section>

            {/* Latest Insights Tips Articles */}
            <section>
                <h3>
                    Latest Insights
                </h3>
                <p>
                    Practical advice and reflections on building a sustainable tech career.
                </p>
                <div>
                    <p>
                        <span>Productivity</span>
                        <span>6 minute read </span>
                    </p>
                    <h5>
                        The Developers's guide to Deep Work
                    </h5>
                    <p>
                        Short description placeholder for the blog 
                    </p>
                    <a href="#">Read More</a>
                </div>

                <div>
                    <p>
                        <span>Wellness</span>
                        <span>4 minute read </span>
                    </p>
                    <h5>
                        Preventing Developer Burnout
                    </h5>
                    <p>
                        Short description placeholder for the blog 
                    </p>
                    <a href="#">Read More</a>
                </div>

                <div>
                    <p>
                        <span>Learning</span>
                        <span>5 minute read</span>
                    </p>
                    <h5>
                        Building a scalable learning Routine
                    </h5>
                    <p>
                        Short description placeholder for the blog 
                    </p>
                    <a href="#">Read More</a>
                </div>

                <div>
                    <p>
                        <span>Collaboration</span>
                        <span>4 minute read</span>
                    </p>
                    <h5>
                        The Art of Code Reviews.
                    </h5>
                    <p>
                        Short description placeholder for the blog 
                    </p>
                    <a href="#">Read More</a>
                </div>
                <button>View All Posts</button>
            </section>

            {/*Daily Routine Section, still thinking about whether I should add this section or not*/}

            <button>Get In Touch</button>
        </div>
    );
};

