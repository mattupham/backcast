var VideoPlayerView = Backbone.View.extend({
  
  
  initialize: function () {
    this.render();
  }, 

  render: function(video) {
    var video = video || this.collection.models[0];
    
    if (video) {
      console.dir(video.id);
      this.$el.html(this.template(video));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
    
  },

  template: templateURL('src/templates/videoPlayer.html')

});
