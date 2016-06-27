import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rental', {path: '/rental/:rental_id'});
  this.route('review');
  this.route('favorites');
});

export default Router;
