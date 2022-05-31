import "./portfolio.css";
import { GoMarkGithub } from "react-icons/go";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <section id="boxes">
          <section class="Box">
            <a href="https://github.com/sevalc/stardew_forum">
              <GoMarkGithub className="icon" />
            </a>
            <div id="Box1">
              <img
                src="assets/stardew.JPG"
                alt="screenshot from game forum"
                href=""
              />
              </div>
              <a href="https://stardew-forum-project.herokuapp.com/">
                Stardew Valley Forum
              </a>
          </section>
        </section>
      </div>
    </div>
  );
}
