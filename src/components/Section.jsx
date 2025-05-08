import { Children, Component } from 'react';

class Section extends Component {
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <p>{this.props.children}</p>
      </section>
    );
  }
}

export default Section;
