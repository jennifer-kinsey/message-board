import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('message');
    return this.store.findAll('response');
  },

  actions: {
    saveMessage(params){
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
  }
});
