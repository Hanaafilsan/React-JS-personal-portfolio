import React from "react";

export default function MyPortfolio() {
  const portfolioData = [
    {
      id: "1",
      src: "./img/project1.png",
      title: "Sprint Project",
      description:
        "This project is one of the problems I solved during my academic career",
      link: "View In Github",
    },
    {
      id: "2",
      src: "./img/project2.png",
      title: "weather-app",
      description:
        "This project is one of the problems I solved during my academic career",
      link: "View In Github",
    },
    {
      id: "3",
      src: "./img/project3.png",
      title: "Instagram Clone",
      description:
        "This project is one of the problems I solved during my academic career",
      link: "View In Github",
    },
  ];

  const visitGithub = () => {
    window.open("https://github.com/Hanaafilsan", "_blank");
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={visitGithub}>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {portfolioData.map((item) => (
          <div key={item.id} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
               
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}