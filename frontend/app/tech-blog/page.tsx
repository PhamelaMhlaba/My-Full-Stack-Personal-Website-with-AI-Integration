import React from "react";
import TechBlog from "../components/TechBlogHeader";

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
    ];

    return (

        <div>
        <TechBlog />
      
              
              
              

            {/* Blog cards */}
            <section>
        <div>
          {posts.map((post) => (
            <article key={post.id}>
              <header>
                <div>
                  <span>{post.category}</span>
                  <span> • {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
              </header>
              <p>{post.excerpt}</p>
              <footer>
                <time>{post.date}</time>
                <a href="#">Read More →</a>
              </footer>
            </article>
          ))}
        </div>
      </section>

       {/* Newsletter Subscription */}
      <section>
        <h2>Stay Updated with Latest Posts</h2>
        <p>
          Get weekly insights on AI, development, and technology trends delivered
          to your inbox.
        </p>
        <form>
          <label htmlFor="newsletter-email">Email</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
                   
                
            
        
