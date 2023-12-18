import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { queryClient } from './config/reactQuery';
import Content from './routes/';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <div className='app'>
        <BrowserRouter>
          {/* <Header /> */}
          <Content />
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
