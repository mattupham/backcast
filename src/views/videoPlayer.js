var VideoPlayerView = Backbone.View.extend({
  
  
  initialize: function () {
    this.render();
  }, 

  render: function() {

    if (this.collection.models[0]) {
      console.dir(this.collection.models[0]);
      this.$el.html(this.template(this.collection.models[0].attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
    
  },

  template: templateURL('src/templates/videoPlayer.html')

});
