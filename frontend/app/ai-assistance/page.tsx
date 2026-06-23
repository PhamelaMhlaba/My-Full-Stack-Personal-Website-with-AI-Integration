import React from "react";
import styles from "./AiAssistance.module.css";
import Pricing from "../components/PricingSolutions";
import OurProcess from "../components/OurProcess";

export default function AiAssistancePage() {
    return (
        <main className={styles.container}>
            {/* Hero Section is the integrated Service section */}
            {/* Service Section */}
            <Pricing />
             {/*Our Process Section*/}
             <OurProcess />
        </main>  
    );
};