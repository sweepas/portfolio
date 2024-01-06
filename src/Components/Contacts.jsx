import gitLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';

export function Contacts({}) {
  return <span className="contacts-container">
            <a href="" target="_blank">
              <img src={gitLogo} alt="github logo" className="github-logo logo" />
            </a>
            <a href="https://www.linkedin.com/in/marius-slepetys/" target="_blank">
              <img src={linkedinLogo} alt="linkedin logo" className="linkedin-logo logo" />
            </a>
          </span>;
}
  