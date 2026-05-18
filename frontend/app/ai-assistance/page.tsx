import React from "react";
import styles from "./AiAssistance.module.css";
import Service from "../components/Service";
import Pricing from "../components/PricingSolutions";
import ClientStories from "../components/ClientStories";
import OurProcess from "../components/OurProcess";

export default function AiAssistancePage() {
    return (
        <main className={styles.container}>
            {/* Hero Section is the integrated Service section */}
            {/* Service Section */}
            <Service />
             {/* Pricing Section */}
            <Pricing />
            {/*Client Success Stories Section*/}
            <ClientStories />
             {/*Our Process Section*/}
             <OurProcess />


            
        </main>  
    );
};