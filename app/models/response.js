import DS from 'ember-data';

export default DS.Model.extend({
  responder: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  answer: DS.attr(),
  code: DS.attr(),
  message: DS.belongsTo('message', { async: true })
});
