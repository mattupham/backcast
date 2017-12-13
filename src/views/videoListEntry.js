//move
var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  
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
  
  handleClick: function() {
    console.log('this.model.select()', this.model.select());
  },

  template: templateURL('src/templates/videoListEntry.html')

});
