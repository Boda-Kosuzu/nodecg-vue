/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGamepad,
  faKeyboard,
  faCommentDots,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './main.vue';
import waitForReplicants from './store';

library.add(faGamepad, faCommentDots, faKeyboard, faCommentAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

waitForReplicants().then((store) => {
  new Vue({
    store,
    el: '#App',
    render: (h) => h(App),
  });
});
