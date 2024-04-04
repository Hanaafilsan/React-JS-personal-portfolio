export default function MySkills() {
    return (
      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
          <p className="section--title">My Skills</p>
          <h2 className="skills--section--heading">My Expertise</h2>
        </div>
        <div className="skills--section--container">
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src="./img/skills.jfif" alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Front-End</h3>
              <p className="skills--section--description">I am proficient in front-end development, using HTML, CSS, and JavaScript to create dynamic websites. I prioritize responsive design, ensuring optimal user experiences across various devices and browsers With a strong focus. </p>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src="./img/skills.jfif" alt="Tag" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">UI & UX Design</h3>
              <p className="skills--section--description">I create visually appealing, user-friendly interfaces. Through research, I have a strong sense of design and prioritize the needs of users wireframing, prototyping, and usability testing, I ensure exceptional user experiences.</p>
            </div>
          </div>
    
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src="./img/skills.jfif" alt="Feather Pen" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">wordPress Development</h3>
              <p className="skills--section--description">I specialize in WordPress development, leveraging its powerful features to build customizable and functional websites. From theme customization to plugin integration, I deliver tailored solutions that meet clients' unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }