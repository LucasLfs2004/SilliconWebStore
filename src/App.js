import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './routes/index.tsx';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
