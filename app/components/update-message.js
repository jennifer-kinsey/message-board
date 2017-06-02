import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(message) {
      var params = {
        poster: this.get('poster'),
        date: this.get('date'),
        time: this.get('time'),
        title: this.get('title'),
        body: this.get('body'),
        code: this.get('code'),
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
