//move
var VideoListEntryView = Backbone.View.extend({

  
  initialize: function () {
    this.render();
  },
  
  render: function() {
    // this takes in model attributes
    // creates a template using that data
    // stored it as html
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
