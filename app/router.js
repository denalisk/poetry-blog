import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('create-post');
  this.route('category', {path: '/category/:category_id'});
  this.route('special');
});

export default Router;
