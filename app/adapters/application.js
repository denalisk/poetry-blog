import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  model() {
    return this.store.findAll('category');
  }
});
