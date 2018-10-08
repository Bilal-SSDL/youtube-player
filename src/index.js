import React from 'react';
import ReactDOM from 'react-dom';
import 'D:/0ffice/Javascript/Sessions/React/youtube-player-master/src/dist/index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from '../src/components/Nav/route'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
