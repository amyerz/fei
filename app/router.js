import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("questions", function() {
    this.route("view", { path: ":id" });
    this.route("new", { path: ":id" });
    this.route("edit", { path: ":id" });
  });
});

export default Router;
