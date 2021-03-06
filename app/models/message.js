import DS from 'ember-data';

export default DS.Model.extend({
  poster: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  code: DS.attr(),
  responses: DS.hasMany('response', { async: true })
});
