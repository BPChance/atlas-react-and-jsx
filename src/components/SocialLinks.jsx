import { Component } from 'react';

class SocialLinks extends Component {
  render() {
    return (
      <div className="social-links">
        <a href="https://www.linkedin.com/in/bpchance/" target="_blank">
          <img src="src/assets/linkedin.svg" alt="linkedin" />
        </a>
        <a
          href="https://github.com/BPChance/atlas-react-and-jsx.git"
          target="_blank"
        >
          <img src="src/assets/github.svg" alt="github" />
        </a>
      </div>
    );
  }
}

export default SocialLinks;
