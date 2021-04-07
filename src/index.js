import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './store/reducers';
import slides from './mock/slides.js';
// import chars from './mock/chars';
// import details from './mock/details';

import App from './components/app/app';
import './sass/style.scss';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App 
      slides={ slides }
      // chars
      // details
    />
  </Provider>,
  document.getElementById('root')
);
