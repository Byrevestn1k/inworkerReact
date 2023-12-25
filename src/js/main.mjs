import { adaptiveHeader } from './header/header.js';
import { navigationMenu } from './navigation/nav.js';
import { adaptiveNavigation } from './navigation/nav.js';
import { comments } from './comments/comments.js';

adaptiveHeader()
navigationMenu()
adaptiveNavigation()
comments()
let thisYear = document.querySelector(`.this-year`);
thisYear.textContent = new Date().getFullYear()
let thisSite = document.querySelector(`.this-site`);
thisSite.textContent = document.domain