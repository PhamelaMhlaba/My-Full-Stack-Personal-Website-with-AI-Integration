import React from "react";

export default function ContactMePage () {
    return (
        <div>
            {/* Hero/ Introduction */}
            <section>
                <h1>
                    Let's Build Something Amaizing
                </h1>
                <p>
                    Ready to transform your ideas int reality? Let discuss your project and how I can help you achieve your goals.
                </p>
            </section>

            {/*Contact Area: Left form */}
            <section>
                <div>
                    <h3>
                        Get in Touch
                    </h3>
                    <form>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input id="FirstName" name="firstName" type="text" />
                        </div>

                        <div>
                            <label htmlFor="LastName">Last Name</label>
                            <input id="firstName" name="firstName" type="text" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" />
                        </div>

                        <div>
                            <label htmlFor="projectType">Project Type</label>
                            <select id="projectType" name="projectType" defaultValue="">
                                <option>AI Integration</option>
                                <option>Web Application</option>
                                <option>Consulting</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="budget">Project Budget</label>
                            <select id="budget" name="budget" defaultValue="">
                                <option value="">Select budget range</option>
                                <option>$1k - $5k</option>
                                <option>$5k - $10k</option>
                                <option>$10k+</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description">Project Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={5}
                                placeholder="Tell me about your project, goals and any specific requirements..."
                            />
                        </div>

                        {/* Submit (placeholder) */}
                        <button type="button">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}