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
            
        </main>  
    );
};