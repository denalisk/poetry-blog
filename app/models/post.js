import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  lines: DS.attr(),
  date: DS.attr(),
  tags: DS.attr(),
  category: DS.attr()
});
