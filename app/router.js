import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('fieldSelects');
  this.route('fieldChooseSelects');
});

export default Router;
