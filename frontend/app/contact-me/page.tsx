import React from "react";
import styles from "./ContactMe.module.css";
import { Mail, Phone, Calendar } from "lucide-react"; 

export default function ContactMePage () {
    return (
            <main className={styles.contactMeContainer}>
                {/* Hero/ Introduction */}
                <div className={styles.contactMeHeader}>
                    <h1 className={styles.title}>
                        Let's Build Something Amaizing
                    </h1>
                    <p className={styles.headerDescription}>
                        Ready to transform your ideas int reality? Let discuss your project and how I can help you achieve your goals.
                    </p>
                </div>
            

            {/*Contact Area: Left form */}
            <section className={styles.contactSection}>
                {/* Get in touch div container */}
                <div className={styles.contactForm}>
                    <h3 className={styles.sectionTitle}>
                        Get in Touch
                    </h3>
                    <form className={styles.form}>
                        <div className={styles.nameFields}>
                            <div className={styles.formColumn}>
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" name="firstName" type="text" placeholder="John" />
                                
                            </div>

                            <div className={styles.formColumn}>
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" name="lastName" type="text" placeholder="Peterson" />
                            </div>
                        </div>

                            <div className={styles.formColumn}>
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" placeholder="John@example.com" />
                            </div>

                            <div className={styles.formColumn}>
                                <label htmlFor="projectType">Project Type</label>
                                <select id="projectType" name="projectType" defaultValue=""> 
                                    <option value="" disabled>
                                        Select project type
                                    </option>
                                    <option>AI Integration</option>
                                    <option>Web Application</option>
                                    <option>Consulting</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className={styles.formColumn}>
                                <label htmlFor="budget">Project Budget</label>
                                <select id="budget" name="budget" defaultValue="">
                                    <option value="">Select budget range</option>
                                    <option>$1k - $5k</option>
                                    <option>$5k - $10k</option>
                                    <option>$10k+</option>
                                </select>
                            </div>

                            <div className={styles.formColumn}>
                                <label htmlFor="description">Project Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={5}
                                    placeholder="Tell me about your project, goals and any specific requirements..."
                                />
                            </div>

                        {/* Submit (placeholder) */}
                        <div className={styles.formColumn}>
                            <button type="button" className={styles.ctaButton}>
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>

                {/* direct message div container*/}
                <div className={styles.directContact}>
                    <h3 className={styles.title}>
                        Direct Contact
                    </h3>

                    {/* Email */}
                    <div className={styles.contactItem}>
                        <div className={styles.iconWrapper}>
                            <Mail size={20} />
                        </div>
                    </div>

                    <div className={styles.textWrapper}>
                        <h4>Email</h4>
                        <p>hello@aideveloper.com</p>
                    </div>
        

                    {/* Phone */}
                    <div className={styles.contactItem}>
                        <div className={styles.iconWrapper}>
                            <Phone size={20} />
                        </div>
                    </div>

                    <div className={styles.textWrapper}>
                        <h4>Phone</h4>
                        <p>+1 (555) 123-4567</p>
                    </div>
,

                    {/* Schedule Free Call */}
                    <div className={styles.contactItem}>
                        <div className={styles.iconWrapper}>
                            <Calendar size={20} />
                        </div>
                    </div>

                    <div className={styles.textWrapper}>
                        <h4>Schedule a Call</h4>
                        <p>Book a free consultation</p>
                    </div>
                </div>
    
            {/*FAQ Section*/}
            <section>
                <h2>Frequently Asked Quenstions </h2>
                <div>
                    <h4>
                        How long does a typical project take?
                    </h4>
                    <p>
                        Project timelines vary based on complexity, but mots AI inegrations take 4-8 weeks, while full web applications can take 8-16 weeks. I will provide a details timeline during our initial consultation.
                    </p>
                </div>

                <div>
                    <h4>
                        Do you work with startups?
                    </h4>
                    <p>
                        Absolutely! I love working with startups and understand the unique challenges they face. I offer flexible pricing and can even concider equity arranagments for the right projects. 
                    </p>
                </div>

                <div>
                    <h4>
                        What's included in ongoing support?
                    </h4>
                    <p>
                        All projects include 30 days of fee support after launch. Ongoing support packages include bug fixes, performacne monitoring, feature updates, and priority reponses times. 
                    </p>
                </div>

                <div>
                    <h4>
                        Can you help with existing projects?
                    </h4>
                    <p>
                        Yes! I can help optimize existing applications, add AI features to current systems, or provide code reviews and architectural guidance for your development team. 
                    </p>
                </div>
            </section>
            </section>
    
        </main>
    )
}