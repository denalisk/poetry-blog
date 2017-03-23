import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      category: params.category_id,
      categories: this.store.findAll('category'),
      posts: this.store.findAll('post').then(results => results.filterBy('category', params.category_id.toString()))
    });
  }
});
