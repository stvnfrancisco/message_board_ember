App.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        text: this.get('text'),
        author: this.get('author'),
        description: this.get('description')
      });
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
