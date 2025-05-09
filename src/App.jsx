import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        React is a JavaScript library for building user interfaces. It allows
        for the creation of components that manage their own state to update the
        UI as changes are made. React uses a virtual DOM so the site doesn't
        have to reload everytime something is updated.
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Improved performance</li>
          <li>User interactivity</li>
          <li>Flexible & Versatile</li>
          <li>Reusability</li>
          <li>Scalability & Maintanability</li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource
          label={'w3schools'}
          link={'https://www.w3schools.com/react'}
        />
        <HelpfulResource
          label={'React mdn web docs'}
          link={
            'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started'
          }
        />
        <HelpfulResource label={'react dev'} link={'https://react.dev/'} />
      </Section>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
