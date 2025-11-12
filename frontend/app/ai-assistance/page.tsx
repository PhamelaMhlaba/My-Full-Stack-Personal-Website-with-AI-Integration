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