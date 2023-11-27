import { Provider } from 'react-redux';
import { store } from '../../services/store';
import { AppRoutes } from './routes';

function App() {
  return (
      <Provider store={store}>
          <AppRoutes />
      </Provider>
  );
}

export default App;