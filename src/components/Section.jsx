import { Children, Component } from 'react';

class Section extends Component {
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </section>
    );
  }
}

export default Section;
