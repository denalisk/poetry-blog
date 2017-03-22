import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
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
        category: 'default'
      }
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
