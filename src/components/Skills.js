import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 data-aos="fade-left">Skills</h2>
            <div class="u-center">
              <section class="skills">
                <div class="skill-nav">
                  <h3 class="skill_type" data-aos="fade-right">HTML</h3>
                  <div class="skill_outer-bar">
                    <div class="skill_inner-bar skill_inner-bar--100"></div>
                  </div>
                </div>
                <div class="skill-nav">
                  <h3 class="skill_type" data-aos="fade-right">CSS</h3>
                  <div class="skill_outer-bar">
                    <div class="skill_inner-bar skill_inner-bar--90"></div>
                  </div>
                </div>
                <div class="skill-nav">
                  <h3 class="skill_type" data-aos="fade-right">JS</h3>
                  <div class="skill_outer-bar">
                    <div class="skill_inner-bar skill_inner-bar--80"></div>
                  </div>
                </div>
                <div class="skill-nav">
                  <h3 class="skill_type" data-aos="fade-right">JAVA</h3>
                  <div class="skill_outer-bar">
                    <div class="skill_inner-bar skill_inner-bar--70"></div>
                  </div>
                </div>
                <div class="skill-nav">
                  <h3 class="skill_type" data-aos="fade-right">SQL</h3>
                  <div class="skill_outer-bar">
                    <div class="skill_inner-bar skill_inner-bar--60"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};