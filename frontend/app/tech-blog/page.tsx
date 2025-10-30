import React from "react";
import TechBlog from "../components/TechBlogHeader";

export default function TechBlogPage () {
    return (
        <div>
            <TechBlog />
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
                   
                
            
        
