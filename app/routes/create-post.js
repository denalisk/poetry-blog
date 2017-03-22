import Ember from 'ember';

// checkCategories(modelCategories) {
//   for
// }

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash ({
      posts: this.store.findAll('post'),
      categories: this.store.findAll('category')
    });
  },

  actions: {
    savePost() {
      console.log("current title is " + this.controller.get('title'));
      var params = {
        author: this.controller.get('author'),
        date: moment().format("MM/DD/YYYY"),
        title: this.controller.get('title'),
        lines: this.controller.get('lines').split("\n"),
        tags: this.controller.get('tags').split(', '),
        category: this.controller.get('category')
      };

      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
