import { AiTwotoneMail } from "react-icons/ai";
import Form from "./form/Form"

export default function Contact() {
  return (
    <div>
      <div className="email">
        <a href="sevalc@live.com">
          <AiTwotoneMail className="icon" />
        </a>
      </div>
      <Form/>
    </div>
  );
}

