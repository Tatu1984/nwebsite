import {
  ParallaxLayer,
  SplitText,
  TiltCard,
  MagneticButton,
} from "@/components/ui";
import { projects } from "@/data/data";
import { Link } from "react-router-dom";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-container">
        <ParallaxLayer speed={-0.2}>
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">
              <SplitText text="Featured" />
              <br />
              <SplitText text="Projects" className="accent" />
            </h2>
          </div>
        </ParallaxLayer>

        <div className="flex justify-center flex-wrap gap-6 mb-10">
          {projects.map((project, i) => (
            <TiltCard
              key={i}
              className="portfolio-card w-full md:w-[47%] lg:w-[32%]"
            >
              <Link to={`/portfolio/${project.slug}`}>
                <>
                  <div
                    className="portfolio-image"
                    style={{ background: project.gradient }}
                  >
                    <div className="portfolio-overlay">
                      <span className="portfolio-category">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-desc">{project.desc}</p>
                    <div className="portfolio-tech"></div>
                  </div>
                </>
              </Link>
            </TiltCard>
          ))}
        </div>

        <div className="portfolio-cta mt-20">
          <MagneticButton href="/products" className="btn-primary">
            View All Projects
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
