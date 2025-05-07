import './index.css';
import ReactDom from 'react-dom/client';
import App from './App';

const div = document.getElementById('root');
const root = ReactDom.createRoot(div);
root.render(<App />);
