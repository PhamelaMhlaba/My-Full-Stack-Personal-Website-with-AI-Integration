import React from "react";

export default function AboutPage() {
    return (

        <div>
          {/* Top Section :Intro*/}
          <section>
            <h3>
                About Me
            </h3>
            <p>
                Passionate about creating intelligent solutions that make a real difference in business and everyday life
            </p>
          </section>

          {/*Profile Section: Image on the left and text on the right*/}
          <section>
            <div>
              {/*Left side: Profile image */}
              <div>
                <img src="path-to-my-image" alt="Phamela Mhlaba" />
              </div>
              {/* Desscription and Sucess Stories */}
              <div>
                <h4>
                    Engineering AI Solutions at Scale
                </h4>
                <p>
                    With over 2 years of Full-Stack Engineering experience and 4 years specializing in AI/ML Solutions, I architect and build production-ready AI applications that serve millions of users. My expertise spans from backend infrastructure to frontend interfaces, with deep knowledge in machine learning ops.
                </p>
                <p>
                    I specialize in in translating complex AI capabilities into intuitive user experience, building the entire technology stack from data pipelines to deployment infrastructure. My approach combines software engineering best practices with cutting edge AI research to deliver reliable, scalable solutions
                </p>

                <div>
                    <h5>
                        150+
                    </h5>
                    <p>
                        Project Delivered
                    </p>
                </div>

                <div>
                    <h5>
                        50+
                    </h5>
                    <p>
                        Happy Clients
                    </p>
                </div>

                <div>
                    <h5>
                        8+
                    </h5>
                    <p>
                        Years of Experience
                    </p>
                </div>

                <div>
                    <h5>
                        24/7
                    </h5>
                    <p>
                        Support Available
                    </p>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}