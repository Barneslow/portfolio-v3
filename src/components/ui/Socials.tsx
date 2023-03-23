import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex space-x-6 rounded-3xl px-10 py-5 bg-zinc-900">
      <a target="_blank" href="https://github.com/Barneslow">
        <FontAwesomeIcon
          icon={faGithub}
          className="icon hover:text-orange-500 hover:border-orange-500"
        />
      </a>
      <a target="_blank" href="https://www.facebook.com/darrach.barneveld">
        <FontAwesomeIcon
          icon={faFacebook}
          className="icon  hover:text-blue-500 hover:border-blue-500"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/darrach-barneveld-2b493511b/"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="icon  hover:text-green-500 hover:border-green-500"
        />
      </a>
      <a href="mailto:darrachb1991@gmail.com">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="icon  hover:text-red-500 hover:border-red-500"
        />
      </a>
    </div>
  );
};

export default Socials;
