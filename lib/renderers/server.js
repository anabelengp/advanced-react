import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from '../state-api/lib';
import config from '../config';

import App from '../components/App';

async function serverRender() {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: resp.data,
  };
}

export default serverRender;
