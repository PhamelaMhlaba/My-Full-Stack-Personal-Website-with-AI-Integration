import React from "react";
import Hero from "./components/Hero";


export default function HomePage ()  {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Sucess stories/ Stats Section */}
      <section> 
        <div>
          <div>
            <h6>
              150+
            </h6>
            <p>
              Projects Delivered
            </p>
          </div>
          <div>
            <h6>
              50+
            </h6>
            <p>
              Happy Clients
            </p>
          </div>
          <div>
            <h6>
              8+
            </h6>
            <p>
              Years of Experience
            </p>
          </div>
          <div>
            <h6>
              24/7
            </h6>
            <p>
              Support Available
            </p>
          </div>
        </div>
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

        {/* Button to AI Assistance */}
        <button>View ALL Services</button>
      </section>

      {/*Client Success Stories Section*/}

      <section>
        <h2>
          Client Success stories
        </h2>

      {/* Client Review 1*/}
        <div>
          <div>★★★★★</div>
          <p>"The AI Chatbot transformed our customer service. Responsive time decreased by 80% and customer satisfication increased significantly"</p>
          <p>Sarah Johnson</p>
          <p>CTO, GrowthCorp</p>
        </div>

      {/* Client Review 1*/}
        <div>
          <div>★★★★★</div>
          <p>"Outsatnding work on our web application. The scalable arhcitecture handles our growing user base perfectly."</p>
          <p>Micheal chen</p>
          <p>CTO, GrowthCopr</p>
        </div>

      {/* Client Review 3 */}
        <div>
          <div>★★★★★</div>
          <p>"The predictive analytucs solutions increased our sales forecast accuracy by 40%.Incredible ROI"</p>
          <p>Emma Rodrigues</p>
          <p>VP Sales, DataDriven LLC</p>
        </div>

      {/* Button that render a contact from for more enquiries */}
        <div>
          <button>Start Your Project</button>
        </div>
      </section>

    </div>
  );
};