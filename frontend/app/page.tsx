import React from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import ClientStories from "./components/ClientStories";


export default function HomePage ()  {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Service Section */}
      <Service />
      
      {/*Client Success Stories Section*/}
      <ClientStories />

    </div>
  );
};