import "./footer.css"
import { GoMarkGithub } from "react-icons/go";
import {AiFillLinkedin} from "react-icons/ai"

function Footer() {
    return (
        <div>
            <div className="github">
            <a href="https://github.com/sevalc"><GoMarkGithub className="icon" /></a>
            <a href="https://linkedin.com/in/seval-cakir-96404616a"><AiFillLinkedin className="icon" /></a>
            </div>
        
        <div>
            All Rights Reserved.
        </div>
        </div>
    )
}
export default Footer