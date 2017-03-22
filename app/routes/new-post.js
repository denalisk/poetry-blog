import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    saveRental1() {
      var params = {
        author: this.get('author'),
        date: moment().format("DD/MM/YYYY"),
        title: this.get('title'),
        lines: this.get('lines').split("\n"),
        tags: this.get('tags').split(', '),
        category: this.get('category')
      }
    }
  }
});
