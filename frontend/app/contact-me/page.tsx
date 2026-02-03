import React from "react";
import styles from "./ContactMe.module.css";
import { Mail, Phone, Calendar, Linkedin, Github, Instagram } from "lucide-react";


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
                <div className={styles.rightSideContainer}>
                    <div className={styles.directContact}>
                        <h3 className={styles.formTitle}>
                            Direct Contact
                        </h3>

                        {/* Email */}
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <Mail size={20} />
                            </div>
                    

                            <div className={styles.textWrapper}>
                                <h4>Email</h4>
                                <p>phamelamhlaba@gmail.com</p>
                            </div>
                        </div>
        

                        {/* Phone */}
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <Phone size={20} />
                            </div>
                

                            <div className={styles.textWrapper}>
                                <h4>Phone</h4>
                                <p>+27 75 324 6472</p>
                            </div>
                        </div>
,

                        {/* Schedule Free Call */}
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <Calendar size={20} />
                            </div>
                
                            <div className={styles.textWrapper}>
                                <h4>Schedule a Call</h4>
                                <p>Book a free consultation</p>
                            </div>
                        </div>
                    </div>

                        {/* Follow Me */}
                        <div className={styles.followMe}>
                            <h3 className={styles.formTitle}>Follow Me</h3>

                            <div className={styles.socialIcons}>
                            <a
                                href="https://www.linkedin.com/in/phamela-mhlaba/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIconStyle}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>

                            <a
                                href="https://github.com/PhamelaMhlaba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIconStyle}
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/phamela_mhlaba/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIconStyle}
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
            {/*FAQ Section*/}
            <section className={styles.faqSection}>
                <div className={styles.faqHeader}>
                    <h2 className={styles.faqTitle}>
                        Frequently Asked Quenstions 
                    </h2>
                </div>

                <div className={styles.faqContainer}>
                    <h4 className={styles.description}>
                        How long does a typical project take?
                    </h4>
                    <p className={styles.descriptionInfo}>
                        Project timelines vary based on complexity, but mots AI inegrations take 4-8 weeks, while full web applications can take 8-16 weeks. I will provide a details timeline during our initial consultation.
                    </p>
                </div>

                <div className={styles.faqContainer}>
                    <h4 className={styles.description}>
                        Do you work with startups?
                    </h4>
                    <p className={styles.descriptionInfo}>
                        Absolutely! I love working with startups and understand the unique challenges they face. I offer flexible pricing and can even concider equity arranagments for the right projects. 
                    </p>
                </div>

                <div className={styles.faqContainer}>
                    <h4 className={styles.description}>
                        What's included in ongoing support?
                    </h4>
                    <p className={styles.descriptionInfo}>
                        All projects include 30 days of fee support after launch. Ongoing support packages include bug fixes, performacne monitoring, feature updates, and priority reponses times. 
                    </p>
                </div>

                <div className={styles.faqContainer}>
                    <h4 className={styles.description}>
                        Can you help with existing projects?
                    </h4>
                    <p className={styles.descriptionInfo}>
                        Yes! I can help optimize existing applications, add AI features to current systems, or provide code reviews and architectural guidance for your development team. 
                    </p>
                </div>
            </section>
        </main>
    )
}