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
      var store = this.store;
      var params = {
        author: this.controller.get('author'),
        date: moment().format("MM/DD/YYYY"),
        title: this.controller.get('title'),
        lines: this.controller.get('lines').split("\n"),
        tags: this.controller.get('tags').split(', '),
        category: this.controller.get('category')
      };
      var categoryParams = {
        name: this.controller.get('category')
      };

      var newPost = this.store.createRecord('post', params);

      this.store.query('category', { orderBy: "name", equalTo: this.controller.get('category').toString(), limit: 1})
      .then(function(result) {
        if(!(result.get('length') > 0)) {
          console.log("It's a new category, so new instance created");
          var newCategory = store.createRecord('category', categoryParams);
          newCategory.save();
        } else {
          console.log("That entry already exists");
        }
      });
      newPost.save();
      this.transitionTo('index');
    }
  }
});
