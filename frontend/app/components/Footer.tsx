import React from "react";

const Footer = () => {
    return (
        <footer>
            <div>
                <h3>
                    Full Stack AI Engineer 
                </h3>
                <p>
                    Engineering intelligent solutions that bridge AI capabilities with robust full-stack applications. 
                </p>
                <div>
                    {/* Social icons placeholders */}
                    <span>LinkedIn</span>
                    <span>Github</span>
                    <span>Twitter</span>
                    <span>YouTube</span>
                </div>
                </div>

                <div>
                    <h4>
                        Services
                    </h4>
                    <ul>
                        <li>AI Chatbots</li>
                        <li>Web Development</li>
                        <li>Machine Learning</li>
                        <li>Consulting</li>
                    </ul>
                </div>

                <div>
                    <h4>
                        Resources
                    </h4>
                    <ul>
                        <li>Blog</li>
                        <li>Case Studies</li>
                        <li>Free Tools</li>
                        <li>NewsLetters</li>
                    </ul>
                </div>

                <div>
                    <h4>
                        Stay Updated 
                    </h4>
                    <p>
                        Get weekly AI insights and development tips.
                    </p>
                    <form>
                        <input
                            type="email"
                            placeholder="Your email"
                            aria-label="Email for newsletter"
                        />
                        <button
                            type="submit">Subscribe
                        </button>
                    </form>
                </div>
                <div>
                    <p>
                        @ 2025 Phamela Mhlaba. All rights reserved.
                    </p>
                    <div>
                        <a href ="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-of-service">Terms of service</a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;