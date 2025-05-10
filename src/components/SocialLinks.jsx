import { Component } from 'react';
import linkedinImage from '../assets/linkedin.svg';
import githubImage from '../assets/github.svg';

class SocialLinks extends Component {
  render() {
    return (
      <div className="social-links">
        <a href="https://www.linkedin.com/in/bpchance/" target="_blank">
          <img src={linkedinImage} alt="linkedin" />
        </a>
        <a
          href="https://github.com/BPChance/atlas-react-and-jsx.git"
          target="_blank"
        >
          <img src={githubImage} alt="github" />
        </a>
      </div>
    );
  }
}

export default SocialLinks;
