const React = require('react/addons');
const App = require('./screens/Fanabi');
const Lobby = require('./screens/Fanabi/screens/Lobby');
const Board = require('./screens/Fanabi/screens/Board');

const mountNode = document.querySelector('#mountNode');
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const Link = ReactRouter.Link

import createHashHistory from 'history/lib/createHashHistory';
import createStoreInstance from './shared/store/createStore';

import { Provider } from 'react-redux';

const history = createHashHistory();
const store = createStoreInstance({
  userReducer: { cid: 1 }
});

React.render((
  <Provider store={store}>
  {()=>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="board" component={Board}/>
        <Route path="lobby" component={Lobby}/>
      </Route>
    </Router>
  }
  </Provider>
), mountNode);
