import "./portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoMarkGithub } from "react-icons/go";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="pageHeader">
        <h1 >Portfolio</h1>
      </div>
        <div className="container" id="portfolioBoxes">
          <div className="row m-3">
            <div className="col-6">
              <div className="card">
                <div className="card-body bg1 text-white font-weight-bold">
                  <a
                    className="deployedLink"
                    href="https://stardew-forum-project.herokuapp.com/"
                  >
                    Stardew Valley Forum
                  </a>
                  <a
                    href="https://github.com/sevalc/stardew_forum"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoMarkGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-body bg5 text-white font-weight-bold">
                  <a
                    className="deployedLink"
                    href="https://afternoon-beyond-56695.herokuapp.com/"
                  >
                    Note Taker
                  </a>
                  <a href="https://github.com/sevalc/note_taker">
                    <GoMarkGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-6">
              <div className="card">
                <div className="card-body bg2 text-white font-weight-bold">
                  <a
                    className="deployedLink"
                    href="https://tech-blog-sev22.herokuapp.com/"
                  >
                    Tech Blog
                  </a>
                  <a href="https://github.com/sevalc/Tech_blog">
                    <GoMarkGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-body bg3 text-white font-weight-bold">
                  <a
                    className="deployedLink"
                    href="https://sevalc.github.io/Weather_Dashboard/"
                  >
                    Weather Dashboard
                  </a>
                  <a href="https://github.com/sevalc/Weather_Dashboard">
                    <GoMarkGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-6">
              <div className="card">
                <div className="card-body bg4 text-white font-weight-bold">
                  <a
                    className="deployedLink"
                    href="https://sevalc.github.io/WorkDayScheduler/"
                  >
                    Daily Planner
                  </a>
                  <a href="https://github.com/sevalc/WorkDayScheduler">
                    <GoMarkGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-body bg6 text-white font-weight-bold">
                  <a className="deployedLink" href="">
                    Social Network API
                  </a>
                  <a href="https://github.com/sevalc/Social-Network-API">
                    <GoMarkGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}
