var VideoListView = Backbone.View.extend({
  
  initialize: function () {
    this.render();
  }, 

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.children().html(
      this.collection.map(function(video) {
        return new VideoListEntryView({model: video}).el; //.el calls 
      }));
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
