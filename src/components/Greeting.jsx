import { Component } from 'react';
import dayImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightImage from '../assets/night.svg';

class Greeting extends Component {
  render() {
    const date = new Date();
    const time = date.getHours();
    if (time >= 6 && time < 12) {
      return (
        <h1 className="greeting">
          <img src={dayImage} alt="day image" />
          Good Morning!
        </h1>
      );
    } else if (time >= 12 && time < 17) {
      return (
        <h1 className="greeting">
          <img src={dayImage} alt="day image" />
          Good Afternoon!
        </h1>
      );
    } else if (time >= 17 && time < 21) {
      return (
        <h1 className="greeting">
          <img src={eveningImage} alt="evening image" />
          Good Evening!
        </h1>
      );
    } else {
      return (
        <h1 className="greeting">
          <img src={nightImage} alt="night image" />
          Good Night!
        </h1>
      );
    }
  }
}

export default Greeting;
