import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(message) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyMessage', message);
      }
    },
    destroyResponse(response) {
      this.sendAction('destroyResponse', response);
    }
  }
});
