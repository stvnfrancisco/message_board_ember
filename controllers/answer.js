App.AnswerController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('Are you sure you want to delete this?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
