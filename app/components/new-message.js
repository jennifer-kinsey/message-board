import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },

    saveMessage() {
      var params = {
        poster: this.get('poster'),
        date: this.get('date'),
        time: this.get('time'),
        title: this.get('title'),
        body: this.get('body'),
        code: this.get('code')
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage', params);
    }
  }
});
