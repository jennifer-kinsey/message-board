import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    saveResponse() {
     var params = {
       responder: this.get('responder'),
       date: this.get('date'),
       time: this.get('time'),
       answer: this.get('answer'),
       code: this.get('code'),
       message: this.get('message')
     };
     this.set('addNewResponse', false);
     this.sendAction('saveResponse', params);
   }
  }
});
