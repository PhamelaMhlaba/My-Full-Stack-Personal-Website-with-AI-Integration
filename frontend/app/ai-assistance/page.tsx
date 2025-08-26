import React from "react";
export default function AiAssistancePage() {
    return (
        <main>
            {/* Hero Section */}
            <section>
                <h1>
                    AI Engineering Solutions
                </h1>
                <p>
                    End-to-end AI systems engineered with production-ready infrastructure and scalable arhcitecture.
                </p>
            </section>

            {/* Service Section */}
            <section>
              <h2>
                Enterprise AI Engineering
              </h2>
              <p>
                Full-Stack AI solutions engineered for scale, performace, and business impact
              </p>
        
            {/* Service Box 1 */}
            <div>
              <h4>
                AI-Powered Application
              </h4>
              <p>
                Full-Stack applications with integrated LLM capabilities, from chatbots to intelligent automation systems.
              </p>
              <ul>
                <li>✔ GPT-4 powered responses</li>
                <li>✔ Multi-language support</li>
                <li>✔ CRM integration</li>
              </ul>
            </div>

            {/* Service Box 2 */}
            <div>
              <h4>
                ML Pipeline Engineering
              </h4>
              <p>
                End-to-end machine learning pipelines with robust data infrastructure and model deployment.
              </p>
              <ul>
                <li>✔ Sales forecasting</li>
                <li>✔ Customer behavior prediction</li>
                <li>✔ Risk assessment</li>
              </ul>
            </div>

            {/* Service Box 3 */}
            <div>
              <h4>
                Intelligent Automation
              </h4>
              <p>
                Full-stack automation solutions that leverage AI to optimize business procecces and workflows.
              </p>
              <ul>
                <li>✔ Document processing</li>
                <li>✔ Data extraction</li>
                <li>✔ workflow optimization</li>
              </ul>
            </div>
            </section>  

            {/*Pricing Section */}   
            <section>
                <h2>
                    Choose Your AI Solution
                </h2>
                <p>
                    Flexible pricing oprtions to fit different business sizes and requirements. 
                </p>
                
            <div>
                {/* Starter Plan */}
                <article>
                    <h3>
                        Starter 
                    </h3>
                    <p>
                        $2,500
                    </p>
                    <p>
                        Perfect for small business getting started with AI
                    </p>
                    <ul>
                        <li>Basic Chatbot setup</li>
                        <li>1,000 montly interactions</li>
                        <li>Email Support</li>
                        <li>30-day implementation</li>
                    </ul>
                    <button>Get started</button>
                </article>
                
                {/*Professional Plan */} 
                <article>
                    <h3>
                        Professional (Popular)
                    </h3>
                    <p>
                        &7,700
                    </p>
                    <p>
                        Advanced AI Solutions for growing business
                    </p>
                    <ul>
                      <li>Custom AI model training</li>
                      <li>10, 000 montly interactions</li>
                      <li>Priority Support</li>
                      <li>Analytics dashboard</li>
                      <li>45- day implemenmtation</li>
                    </ul>
                    <button>Get started</button>
                </article>

                {/* Enterprise Plan */}
                <article>
                    <h3>
                        Enterprise
                    </h3>
                    <p>
                        Custom
                    </p>
                    <p>
                        Tailored AI solutions for large organizations.
                    </p>
                    <ul>
                        <li>Full AI ecosystem</li>
                        <li>Unlimited interactions</li>
                        <li>24/7 dedicated supoort</li>
                        <li>Custom integrations</li>
                        <li>Ongoing optimization</li>
                    </ul>
                    <button>Contact Sales</button>
                </article>
            </div>     
            </section>

            {/* Process Section */}
            <section>
                <h2>Our Process</h2>
                <p>
                    A proven methodology to deliver AI solutions that drive real results
                </p>

                <div>
                    {/* Step 1 */}
                    <article>
                        <h3>
                            1.Discovery
                        </h3>
                        <p>
                            We analyze your business needs and identify the best AI opportunity
                        </p>
                    </article>

                    {/* Step 2 */}
                    <article>
                        <h3>
                            2. Design
                        </h3>
                        <p>
                            Custom AI solution arhitecture tailord to your specific requirements. 
                        </p>
                    </article>

                    {/* Step 3 */}
                    <article>
                        <h3>
                            3. Development
                        </h3>
                        <p>
                            Build and train your AI models with rigorous testing and optimization. 
                        </p>
                    </article>

                    {/* Step 4 */}
                    <article>
                        <h3>
                            4. Deploy
                        </h3>
                        <p>
                            Seamless integration with ongoing support and performance monitoring. 
                        </p>
                    </article>                         
                </div>
            </section>
        </main>
    )
}