var VideoListView = Backbone.View.extend({
  
  initialize: function () {
    this.render();
  }, 

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.children().html(
      this.collection.map(function(video) {
        return new VideoListEntryView({model: video}).el; // What is the .el doing here?
      }));
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
