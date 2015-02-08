import Ember from 'ember';

export default Ember.Controller.extend({

  collapsedId: function () {
    return 'collapse-' + this.get('model.id');
  }.property('model.id'),

  hashCollapsedId: function () {
    return '#' + this.get('collapsedId');
  }.property('collapsedId')
});
