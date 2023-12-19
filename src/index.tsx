import ReactDOM from 'react-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers';
import App from './app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
  throw Error('Container is not found');
}

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  container,
);
