import "./resume.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";


export default function Resume() {
  return (
    <div className="resumePage">
        <div className="resumeContent">
      <h3 className="fullName">SEVAL CAKIR</h3>
        <p>
          Detail-oriented, organized, analytical logistics industry agent with a
          focus on preemptive problem solving, clear communication and
          continuous process/metric improvement. Extensive experience with
          global freight forwarding challenges and opportunities. Currently attending UW Coding Bootcamp. 
        </p>
        <p>
        <h4>Experiences </h4> 
        Ocean Import Specialist at DHL Global Forwarding (Seattle,
        WA March 2020 - JUne 2021) <br></br>
        Ocean Export Coordinator/Certified Dangerous Goods Specialist at DB Schenker (Seattle, WA, 2018-2020) <br></br>
        Volunteering at University Cooperative School (Seattle, WA / 2017 – Present)
        Founder at Dialogue, LLC (Izmir, Turkey / 2002-2006)
      </p>
      <p>
        <h4>Education</h4>
         UW Coding Bootcamp (March 2022 - June 2022) <br></br> B.A in
        Psychology (METU, Ankara, TURKEY – METU is a world top-100 college
        according to World University Rankings)
      </p>
      <h6>For more details please visit my LinkedIn and Github pages. </h6>
      <p><a href="https://github.com/sevalc">
          <GoMarkGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/seval-cakir-96404616a">
          <AiFillLinkedin className="icon" />
        </a></p>
      </div>
    </div>
  );
}
