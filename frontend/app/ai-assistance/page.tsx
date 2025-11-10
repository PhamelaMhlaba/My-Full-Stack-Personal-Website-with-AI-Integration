import React from "react";
import styles from "./AiAssistance.module.css";
import Service from "../components/Service";
import Pricing from "../components/PricingSolutions";

export default function AiAssistancePage() {
    return (
        <main className={styles.container}>
            {/* Hero Section */}
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>
                    AI Engineering Solutions
                </h1>
                <p className={styles.headerDescription}>
                     End-to-End AI systems engineered with production-ready infrastructure.
                </p>
            </div>

            {/* Service Section */}
            <Service />
             {/* Pricing Section */}
            <Pricing />
            
            {/* Process Section */}
            <section>
                <h2>Our Process</h2>
                <p>
                    A proven methodology to deliver AI solutions that drive real results
                </p>

                <div>
                    {/* Step 1 */}
                    <article>
                        <h3>
                            1.Discovery
                        </h3>
                        <p>
                            We analyze your business needs and identify the best AI opportunity
                        </p>
                    </article>

                    {/* Step 2 */}
                    <article>
                        <h3>
                            2. Design
                        </h3>
                        <p>
                            Custom AI solution arhitecture tailord to your specific requirements. 
                        </p>
                    </article>

                    {/* Step 3 */}
                    <article>
                        <h3>
                            3. Development
                        </h3>
                        <p>
                            Build and train your AI models with rigorous testing and optimization. 
                        </p>
                    </article>

                    {/* Step 4 */}
                    <article>
                        <h3>
                            4. Deploy
                        </h3>
                        <p>
                            Seamless integration with ongoing support and performance monitoring. 
                        </p>
                    </article>                         
                </div>
            </section>

            {/*Client Success Stories Section*/}

            <section>
              <h2>
                Client Success stories
              </h2>

            {/* Client Review 1*/}
            <div>
              <div>★★★★★</div>
                <p>"The AI Chatbot transformed our customer service. Responsive time decreased by 80% and customer satisfication increased significantly"</p>
                <p>Sarah Johnson</p>
                <p>CTO, GrowthCorp</p>
              </div>

            {/* Client Review 2*/}
            <div>
              <div>★★★★★</div>
                <p>"Outsatnding work on our web application. The scalable arhcitecture handles our growing user base perfectly."</p>
                <p>Micheal chen</p>
                <p>CTO, GrowthCopr</p>
              </div>
         
            {/* Client Review 3 */}
            <div>
              <div>★★★★★</div>
                <p>"The predictive analytucs solutions increased our sales forecast accuracy by 40%.Incredible ROI"</p>
                <p>Emma Rodrigues</p>
                <p>VP Sales, DataDriven LLC</p>
              </div>

            {/* Button that render a contact from for more enquiries */}
            <div>
              <button>Start Your Project</button>
            </div>
            </section>   
        </main>
    );
};