import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './routes/';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <BrowserRouter>
          {/* <Header /> */}
          <Content />
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
