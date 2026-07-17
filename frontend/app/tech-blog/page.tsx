import React from 'react';
import TechBlog from "../components/TechBlogHeader";
import LatestInsights from "../components/LatestInsights";
import { getAllPosts } from "@/lib/posts";
import styles from "./TechBlog.module.css";


export default function TechBlogPage() {
    const posts = getAllPosts();
    return (
        <div>
            <TechBlog />
            <LatestInsights posts={posts} />
        </div>
  
  );
}
                   
                
            
        
