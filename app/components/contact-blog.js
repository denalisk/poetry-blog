import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeAlert() {
      alert("you made an alert");
    }
  }
});
