import { Component } from 'react';
import Greeting from './Greeting';
import SocialLinks from './SocialLinks';

class Header extends Component {
  render() {
    return (
      <nav>
        <Greeting />
        <SocialLinks />
      </nav>
    );
  }
}

export default Header;
