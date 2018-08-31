import { configure } from '@storybook/react';
import 'todomvc-app-css/index.css';

function loadStories() {
  require('../src/components/stories/index.js');
}

configure(loadStories, module);
