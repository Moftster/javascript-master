import { generateOptions } from './utils.js';

import { init } from './init.js';

const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, {once:true});
