import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        React is a JavaScript library for building user interfaces. It allows for the creation of components that manage their own state to update the UI as changes are made. React uses a virtual DOM so the site doesn't have to reload everytime something is updated.
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
    </div>
  );
}

export default App;
