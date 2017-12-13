var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //creates a new videos collection
    this.videos = new Videos(exampleVideoData);
    this.render();
  },

  render: function() {
    // html 
    this.$el.html(this.template());
    
    
    new SearchView({
      el: '.search', 
      collection: this.videos
    });
    
    new VideoListView({
      el: '.list', 
      collection: this.videos
    });
    
    new VideoPlayerView({
      model: this.videos.at(0),
      el: '.player', 
      collection: this.videos
    });
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
