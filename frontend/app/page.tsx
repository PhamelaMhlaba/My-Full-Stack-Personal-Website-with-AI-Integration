import React from "react";

export default function HomePage ()  {
  return (
    <div>

      {/*Hero/ Introduction Section*/}
      <section>
        {/* Left side : My pciture*/}
        <div>
          <img src="/path-to-your-image.jpg" alt= "Phamela Mhlaba" />
        </div>

        {/* Right side: Intro text and action buttons */}
        <div>
          <h1>
            Engineering the Future with AI & Full Stack
          </h1>
          <p>
            Full Stack Engineering specializing in AI-powered applications. I architect and build intelligent systems that seamlessly intgrate machine learning capabilities with scalable web infrastructure 
          </p>

          {/* Buttons: Contact Me and AI Assistance*/}
          <div>
            <button>View AI Solutions</button>
            <button>Free Consultation</button>
          </div>

          {/* Newsletter Signup Section */}
          <div>
            <h4>
              Weekly AI & Tech Insights
            </h4>
            <p>
              Join 10, 000+ developers getting cutting-edge tips
            </p>
            <div>
              <input type="email" placeholder="Enter your email" />
              <button> Subscribe</button>
            </div>
          </div>
        </div>
      </section>

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

    </div>
  )
}