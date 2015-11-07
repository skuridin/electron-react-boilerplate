import { compose, createStore } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import routes from './routes';
import reducers from './reducers';

export default compose(
  reduxReactRouter({ routes, createHistory })
)(createStore)(reducers);
