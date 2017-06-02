import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('message', params.message_id);
  },

  actions: {
    update(message, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          message.set(key,params[key]);
        }
      });
      message.save();
      this.transitionTo('index');
    },
    destroyMessage(message) {
      var response_deletions = message.get('responses').map(function(response) {
        return response.destroyRecord();
      });
      Ember.RSVP.all(response_deletions).then(function() {
        return message.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveResponse(params) {
      var newResponse = this.store.createRecord('response', params);
      var message = params.message;
      message.get('responses').addObject(newResponse);
      newResponse.save().then(function() {
        return message.save();
      });
      this.transitionTo('message', message);
    },
    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('index');
    }
  }
});
