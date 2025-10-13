import React from "react";
import styles from './About-me.module.css'

export default function AboutPage() {
    return (

        <main className={styles.main}>
            {/* Centered Header Section */}
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>
                    About Me <span className={styles.gradientText}>Phamela Mhlaba</span>
                </h1>
                <p className={styles.sectionDescription}>
                    Passionate about building intelligent, scalable solutions that make a real difference in business and everyday life.
                </p>
            </div>

            {/* Two Column Bio Section */}
            <section className={styles.bioSection}>
                <div className={styles.bioContainer}>
                    {/* Left side: Profile Image */}
                    <div className={styles.imageColumn}>
                        <div className={styles.profileImage}>
                            <img
                              src="/images/coding-image.jpg"
                              alt="Engineering image"
                            />
                        </div>                 
                    </div>
                </div>

                {/* Right side: Bio Content */}
                <div className={styles.contentColumn}>
                    <h2 className={styles.BioTitle}>
                        Engineering AI Solutions at Scale
                    </h2>
                    <div className={styles.bioText}>
                        <p>
                            With over 2 years of Full-Stack Engineering experience and 2 years specializing in AI/ML Solutions, I architect and build production-ready AI applications that serve users. My expertise spans from backend infrastructure to frontend interfaces, with deep knowledge in machine learning ops.
                        </p>
                        <p>
                            I specialize in translating complex AI capabilities into intuitive user experiences, building the entire technology stack from data pipelines to deployment infrastructure. My approach combines software engineering best practices with cutting-edge AI research to deliver reliable, scalable solutions.
                        </p>
                    </div>
                </div>
            </section>
           
          {/*Profile Section: Image on the left and text on the right*/}
        <div>   
          <section>
            <div>
              {/*Left side: Profile image */}
              <div>
                <img src="path-to-my-image" alt="Phamela Mhlaba" />
              </div>
              {/* Desscription and Sucess Stories */}
              <div>
                <h4>
                    Engineering AI Solutions at Scale
                </h4>
                <p>
                    With over 2 years of Full-Stack Engineering experience and 4 years specializing in AI/ML Solutions, I architect and build production-ready AI applications that serve millions of users. My expertise spans from backend infrastructure to frontend interfaces, with deep knowledge in machine learning ops.
                </p>
                <p>
                    I specialize in in translating complex AI capabilities into intuitive user experience, building the entire technology stack from data pipelines to deployment infrastructure. My approach combines software engineering best practices with cutting edge AI research to deliver reliable, scalable solutions
                </p>

                <div>
                    <h5>
                        150+
                    </h5>
                    <p>
                        Project Delivered
                    </p>
                </div>

                <div>
                    <h5>
                        50+
                    </h5>
                    <p>
                        Happy Clients
                    </p>
                </div>

                <div>
                    <h5>
                        8+
                    </h5>
                    <p>
                        Years of Experience
                    </p>
                </div>

                <div>
                    <h5>
                        24/7
                    </h5>
                    <p>
                        Support Available
                    </p>
                </div>
              </div>
            </div>
          </section>

          {/*Core expertise Section */}
          <section>
            <h2>
                Core Expertise
            </h2>
            <p>
                A comprehensive skill set spanning frontend, backend, AI/ML, and cloud technologies
            </p>
            <div>
                {/* Skills Section */}
                <button>JavaScript</button>
                <button>TypeScript</button>
                <button>React</button>
                <button>Node.js</button>
                <button>Express</button>
                <button>MongoDB</button>
                <button>Python</button>
                <button>TensorFlow</button>
                <button>AI/ML</button>
                <button>Docker</button>
                <button>Git</button>
                <button>Next.js</button>
            </div>
          </section>

          {/*My Stack Information */}
          <section>
            <div>
                {/*Frontend Technologies */}
                <div>
                    <h5>
                        Frontend Development
                    </h5>
                    <p>
                        Creating responsive perfomant user interfaces with modern frameworks and libraries
                    </p>
                    <ul>
                        <li>React, Next.js</li>
                        <li>Typescript, Javascript, Python</li>
                        <li>Tailwind CSS</li>
                        <li>Figma</li>
                    </ul>
                </div>

                {/*Backend Technologies*/}
                <div>
                    <h5>
                        Backend & API
                    </h5>
                    <p>
                        Building scalable server architecture and robust API systems 
                    </p>
                    <ul>
                        <li>Node.js, Python, FASTAPI</li>
                        <li>PostgreSQL, MongoDB</li>
                        <li>GraphQL, REST API's</li>
                    </ul>
                </div>

                {/*AI and Machine Learning */}
                <div>
                    <h5>
                        AI & Machine Learning
                    </h5>
                    <p>
                        Implementing inteliigent solutions using cutting-edge AI technologies
                    </p>
                    <ul>
                        <li>OpenAIGPT-4, Claude, Gemini</li>
                        <li>TensorFlow, Sci-Kit Learn</li>
                        <li>Model Development</li>
                        <li>LLM, NLP</li>
                    </ul>
                </div>
            </div>
          </section>

          {/* Professional Journey, Digital CV Timeline. I can add more professional careers which makes this section scalable  */}
          <section>
            <h2>
                Professional Journey
            </h2>
            <div>
            <div>
                2025
            </div>
            <p><strong>Full Stack AI Engineer & Project Manager</strong></p>
            <p>Proto Care Pty (ltd)</p>
            <p>Developed the User Interface of the Proto Care Main Website. Currently developing the Patient Portal where I am involved in both frontend and backend development </p>
            </div>
          </section>
        </div>
    </main>
    );
};
