import React from "react";
export default function TechBlogPage () {

    //Placeholder posts (content only; no data fetching yet)

    const posts = [
        {
            id: 1,
            category: "AI/ML",
            readTime: "5 min read", 
            title: "Building Production=Ready AI Apllication",
            excerpt: 
              "A Practical overview of integrating modern AI into web apps: patterns, guadrails, and deployment tips.",
            date: "March 15, 2024"
        }, 
        {
           id: 2,
            category: "React",
            readTime: "8 min read", 
            title: "Advanced React Patterns for Scalable Apps",
            excerpt: 
              "Explore compound components, render props, and hooks to keep large React codebases maintainable",
            date: "March 10, 2024"
        },
        {
           id: 3,
            category: "DevOps",
            readTime: "12 min read", 
            title: "Serverless API's with AWS Lambda",
            excerpt: 
              "Designing scalable, cost- effective API's with serverless functions and event-driven architecture",
            date: "March 5, 2024"
        },    
    ]
}