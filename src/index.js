import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cm-style/reset.css';
import Layout from './container/index';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout/>, document.getElementById('root'));
registerServiceWorker();
