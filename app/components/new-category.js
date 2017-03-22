import Ember from 'ember';

export default Ember.Component.extend({
  creatingCategory: false,
  actions: {
    makeNewCategory() {
      this.set('creatingCategory', true);
    },
    saveCategory() {
      var params = {
        name: this.get('name')
      };
      console.log("Name is currently " + params.name);
      this.set('creatingCategory', false);
      this.sendAction('saveCategory', params);
    }
  }
});
