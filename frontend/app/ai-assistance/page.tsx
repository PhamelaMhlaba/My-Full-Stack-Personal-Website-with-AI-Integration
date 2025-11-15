import React from "react";
import styles from "./AiAssistance.module.css";
import Service from "../components/Service";
import Pricing from "../components/PricingSolutions";

export default function AiAssistancePage() {
    return (
        <main className={styles.container}>
            {/* Hero Section is the integrated Service section */}
            {/* Service Section */}
            <Service />
             {/* Pricing Section */}
            <Pricing />
            
        </main>  
    );
};